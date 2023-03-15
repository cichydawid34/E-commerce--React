import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { text } from "stream/consumers";
import Navbar from "../components/navbar";
export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
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
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Pasword: </label>
            <Input
              variant="flushed"
              type="password"
              name="password"
              placeholder="password"
              className="bg-white border-b-2"
              value={password}
            />
            <a
              className="text-sm self-end mt-1 hover:text-red-400"
              href="/login"
            >
              Already have an account?
            </a>
          </div>
          <button className="bg-black text-zinc-200 rounded-sm m-2 p-2 hover:bg-gray-800">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
