import React, { useEffect } from "react";
import { IoIosLogIn } from "react-icons/io";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import login from "/login.jpg";
const Login = () => {
  const auth = useAuth();

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing In", { id: "login" });
      await auth?.login(email, password);
      toast.success("Signed In Successfully", { id: "login" });
    } catch (error) {
      toast.error("Signing In Failed", { id: "login" });
    }

    console.log(email, password);
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/");
    }
  }, [auth]);

  return (
    <>
      <div className=" h-screen bg-[#0c0e24]  flex items-center justify-center  ">
        <div className=" flex flex-row  h-[60vh] w-[50vw] rounded-2xl overflow-hidden">
          <div className="w-[25vw] h-[60vh] object-cover">
          
            <img className="w-[25vw] h-[60vh]" src={login} alt="" />
          </div>
          <div className="w-[25vw] h-[60vh] bg-white  ">
            <form
              className="w-[25vw] h-[60vh] bg-white text-black flex flex-col justify-center shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
              method="post"
            >
              <div className="mb-4">
                <label className="block  text-lg font-bold mb-2">Email</label>
                <input
                  className="shadow border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="mb-6">
                <label className="block  text-lg font-bold mb-2">
                  Password
                </label>
                <input
                  className="  shadow border rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex  items-center gap-2"
                  type="submit"
                >
                  Log In <IoIosLogIn className=" text-xl font-extrabold" />
                </button>
              </div>
              <p className=" text-[12px] font-mono font-semibold flex flex-row gap-2 mt-5">
                {" "}
                Dont have an Account ?
                <Link to={"/signup"}>
                  <h1 className=" text-red-600 hover:text-red-700 ">Signup</h1>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
