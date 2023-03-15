import { text } from "stream/consumers";
import Navbar from "./components/navbar";
export default function Login() {
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

        <h2 className="font-bold text-2xl border-b-2">Sign in </h2>
        <form className="flex flex-col gap-4 w-[50%]">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500">Email: </label>
            <input
              type="text"
              name="email"
              className="bg-white border-b-2"
              placeholder="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500">Pasword: </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="bg-white border-b-2"
            />
            <a className="text-sm self-end mt-1">Already have an account?</a>
          </div>
          <button className="bg-black text-zinc-200 rounded-sm m-2 p-2">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
