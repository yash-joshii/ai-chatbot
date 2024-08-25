import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import chat from "/chat.png";
import one from "/one.png";
import two from "/two.png";
import aditya from "/aditya.png";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { PiFinnTheHumanFill } from "react-icons/pi";








const Home = () => {
  const auth = useAuth();
  {document.title = "ChatBot "}
  
  return (
    <>
    
      <div
        id="top"
        className="  h-screen w-screen flex flex-col gap-5 items-center justify-center text-5xl font-bold bg-[#0c0e24] overflow-hidden "
      >
        <div className=" flex flex-col items-center mt-[25vh]">
          {auth?.isLoggedIn ? (
            <>
             
              <h1 className=" flex gap-2 font-bold text-3xl text-white mb-5 ">
                
                Welcome <br /> 
                <span className=" text-red-500 uppercase">
                  
                  {auth?.user?.name}
                </span>
              </h1>
            </>
          ) : (
            <></>
          )}

          <h1 className=" flex flex-col gap-4 items-center text-white">
            This OpenAI ChatBot Makes <br />
            <span>
              {" "}
              Your <span className=" text-blue-600">Doubts Clear</span>
            </span>
          </h1>
          <p className=" m-5  flex flex-col items-center text-[#6b6b6b] text-sm font-mono">
            Using Advanced artifical intelligence and OpenAI, This ChatBot{" "}
            <br /> <span>answer's all your professional answers</span>
          </p>
        </div>
        <div>
          {auth?.isLoggedIn ? (
            <>
              <Link to={"/chat"}>
                <h1 className=" text-xl px-4 py-1 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-black animate-bounce text-white">
                  Chats
                </h1>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <h1 className=" text-xl px-4 py-1 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-black animate-bounce text-white">
                  LogIn
                </h1>
              </Link>
            </>
          )}
        </div>

        <img className=" h-[60vh] rounded-lg" src={chat} alt="" />
      </div>

      <div className=" h-min w-screen bg-white shadow-2xl shadow-black flex  flex-col gap-16 items-center justify-around">
        <h1 className=" text-6xl mt-20 flex flex-col items-center gap-4 font-bold">
          Instruct Our ChatBot To <br />
          <span className=" text-blue-600">Work for you</span>
        </h1>

        <div className=" flex justify-center items-center gap-10  h-[60vh] w-[70vw] bg-[#dcddff]  rounded-lg">
          <div className="left">
            <img className=" h-[50vh] rounded-xl " src={one} alt="" />
          </div>
          <div className="right flex flex-col gap-5">
            <h1 className=" text-3xl font-bold  ">Ask your Questions</h1>
            <Link to={"/chat"}>
              <h1 className=" text-xl px-4 py-1 text-center border-2 border-black rounded-full hover:bg-white hover:text-black hover:border-black text-black">
                Try Now
              </h1>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-10  h-[60vh] w-[70vw] bg-[#d9bde9] mb-20 rounded-lg">
          <div className="left">
            <img className=" h-[50vh] rounded-xl " src={two} alt="" />
          </div>
          <div className="right flex flex-col gap-5">
            <h1 className=" text-3xl font-bold ">Get your Answers</h1>
            <Link to={"/chat"}>
              <h1 className=" text-xl px-4 py-1 text-center border-2 border-black rounded-full hover:bg-blue-500 hover:text-white hover:border-black text-black">
                Try Now
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <footer className="abslute w-screen h-[40vh] bg-black flex flex-col justify-evenly items-end ">
        <a href="#top">
          <button className=" relative h-10 w-10 bg-white top-14 right-14 rounded-full text-black text-2xl flex items-center justify-center">
            <FaRegArrowAltCircleUp />
          </button>
        </a>
        <div className=" w-screen h-[40vh] bg-black flex flex-row justify-evenly items-end ">
          <div className=" h-[30vh] w-[25vw] rounded-t-xl bg-[#2222225b] flex flex-col gap-4 items-center ">
            <div className="flex flex-col gap-3 items-center justify-center mt-5">
              <div className=" w-10 h-10 bg-[#a4deff1e] flex items-center justify-center text-3xl text-blue-400 rounded-lg">
                <IoIosContact />
              </div>
              <h1 className="text-xl text-blue-400   ">Contact</h1>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center text-lg text-white">
              <div className="flex items-center gap-3">
                <MdAlternateEmail />
                <h1 className="text-sm">: bs151439@gmail.com</h1>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlinePhoneAndroid />
                <h1 className="text-sm">: +91 0123456789</h1>
              </div>
            </div>
          </div>


          <div className=" h-[30vh] w-[25vw] rounded-t-xl bg-[#2222225b] flex flex-col gap-4 items-center ">
            <div className="flex flex-col gap-3 items-center justify-center mt-5">
              <div className=" w-10 h-10 bg-[#a4deff1e] flex items-center justify-center text-3xl text-blue-400 rounded-lg">
                <TiMessages />
              </div>
              <h1 className="text-xl text-blue-400   ">Social Handles</h1>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center text-lg text-white">
              <div className="flex items-center gap-3  ">
                <a className=" hover:scale-110 hover:animate-pulse  " href=" https://github.com/Adityasikarwar70">< FaGithub/></a>
                <a className=" hover:scale-110 hover:animate-pulse  " href="https://www.linkedin.com/in/adityasikarwar1/">< ImLinkedin/></a>
                <a className=" hover:scale-110 hover:animate-pulse  " href="https://www.instagram.com/aadityeahh/">< BiLogoInstagramAlt/></a>
                <a className=" hover:scale-110 hover:animate-pulse  " href="">< RiTwitterXLine/></a>
                </div>
                
            </div>
          </div>


          <div className=" h-[30vh] w-[25vw] rounded-t-xl bg-[#2222225b] flex flex-col gap-4 items-center ">
            <div className="flex flex-col gap-3 items-center justify-center mt-5">
              <div className=" w-10 h-10 bg-[#a4deff1e] flex items-center justify-center text-3xl text-blue-400 rounded-lg">
                <PiFinnTheHumanFill />
              </div>
              <h1 className="text-xl text-blue-400   ">Team</h1>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center text-lg text-white">
              <div className="flex items-center gap-3">
                <img className=" h-10 w-10 object-cover rounded-full " src={aditya} alt="" />
                <h1 className="text-lg">yash joshi</h1>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
