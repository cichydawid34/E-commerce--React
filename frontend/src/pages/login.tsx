import { Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setToken} from '../redux/userSlice'
import type { RootState } from './store'
import { text } from "stream/consumers";
import Navbar from "../components/navbar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>();
  const [emailError, setEmailError] = useState<boolean>(false);
  const { token } = useSelector((state: RootState) => state.user);
  const router = useRouter()

  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const tokenn = useSelector((state: RootState) => state.user)
  const validateEmail = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setEmailErrorMessage("Invalid Email");
      setEmailError(true);
    } else {
      setEmailErrorMessage(undefined);
      setEmailError(false);
    }
  };
  useEffect(()=>{
    console.log(token)
  },[token])

  const handleLogin = async (e:any) => {
    e.preventDefault();
    if (!emailError ) {
      try { 
       let returnToken= await toast.promise(
          axios.post("https://red-mountain-shop-backend.onrender.com/login", {
            email: email,
            password: password,
          },{
            headers: {
              'Access-Control-Allow-Origin': '*',
            }
          }),
          {
            pending: "Logging in...",
            success: "Logged in successfully!",
          }
        );
       let set:any =await dispatch(setToken(returnToken.data));
       router.push('/');
       
      }
      catch(error:any) {
          console.log(error.response.data);
          toast.error(` ${error.response.data}`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        };
    } else {
      alert("Please enter a valid email and password.");
    }
};

  return (
    <div className="grid md:grid-cols-2  text-black m-0 h-[100vh]">
      {/* Column 1 */}
      <div className="bg-slate-500  w-full hidden md:block  ">
        <img
          className="h-full bg-cover object-cover "
          src="https://wallpapers.com/images/hd/mountain-aesthetic-tjnpmbwoeh69s8lj.jpg"
        />
      </div>
      {/* Column 2 */}
      <div className="flex  flex-col  align-middle content-center items-center pt-52 gap-6 shadow-sm">
        {/* LOGO TODO */}

        <h2 className="font-bold text-2xl border-b-2 mb-2">Sign in </h2>
        <form className="flex flex-col gap-4 w-[50%]">
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 ">Email: </label>
            <Input
              variant="flushed"
              type="text"
              name="email"
              className="bg-white border-b-2 "
              placeholder="email"
              isInvalid={emailError}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail();
              }}
            />
          </div>
          {emailError ? (
            <p className="text-red-500 text-sm self-end mt-1">
              {emailErrorMessage}
            </p>
          ) : null}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Pasword: </label>
            <Input
              variant="flushed"
              type="password"
              name="password"
              placeholder="password"
              className="bg-white border-b-2"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <a
              className="text-sm self-end mt-1 hover:text-red-400"
              href="/register"
            >
              Don't have an account?
            </a>
          </div>
          <button className="bg-black text-zinc-200 rounded-sm m-2 p-2 hover:bg-white hover:text-black hover:p-[6px] hover:border-2 hover:border-zinc-400 hover:box-sizing" onClick={handleLogin} >
            Sign in
          </button>
        </form>
        <ToastContainer />
      </div>
     
    </div>
  
  );
}
