import { Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import Navbar from "../components/navbar";
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //Email
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>();
  const [emailError, setEmailError] = useState<boolean>(false);

  //Password
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>();
  const [passwordError, setPasswordError] = useState<boolean>(false);
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

  const handleRegister=async(e:any)=>{
    e.preventDefault(); 
    if(!emailError&&!passwordError&&password.length>0&&email.length>0){
      
      let User= await axios.post('./user',{
        email:email,
        password:password
      })
      
    }
    alert("error");

  }

  const validatePassword = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
    if (password.length < 7) {
      setPasswordErrorMessage("Password must have minimum 7 characters");
      setPasswordError(true);
    } else if (!regex.test(password)) {
      setPasswordErrorMessage("Password must contain special character");
      setPasswordError(true);
    } else {
      setPasswordErrorMessage(undefined);
      setPasswordError(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2  text-black m-0 h-[100vh]">
      {/* Column 1 */}
      <div className="bg-slate-500  w-full hidden md:block  ">
        <img
          className="h-full bg-cover object-cover"
          src="https://wallpapers.com/images/hd/mountain-aesthetic-tjnpmbwoeh69s8lj.jpg"
        />
      </div>
      {/* Column 2 */}
      <div className="flex  flex-col  align-middle content-center items-center pt-52 gap-6 shadow-sm">
        {/* LOGO TODO */}

        <h2 className="font-bold text-2xl border-b-2 mb-2">
          Register an account{" "}
        </h2>
        <form className="flex flex-col gap-4 w-[50%]">
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Email: </label>
            <Input
              variant="flushed"
              type="text"
              name="email"
              className="bg-white border-b-2"
              placeholder="email"
              value={email}
              isInvalid={emailError}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail();
              }}
            />
            {emailError ? (
              <p className="text-red-500 text-sm self-end mt-1">
                {emailErrorMessage}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Pasword: </label>
            <Input
              variant="flushed"
              type="password"
              name="password"
              placeholder="password"
              className={"bg-white border-b-2"}
              isInvalid={passwordError}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword();
              }}
              value={password}
            />
            {passwordError ? (
              <p className="text-red-500 text-sm self-end mt-1">
                {passwordErrorMessage}
              </p>
            ) : null}
            <a
              className="text-sm self-end mt-1 hover:text-red-400"
              href="/login"
            >
              Already have an account?
            </a>
          </div>
          <button className="bg-black text-zinc-200 rounded-sm m-2 p-2 hover:bg-white hover:text-black hover:p-[-2px] hover:border-2 box-content" onClick={handleRegister}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
