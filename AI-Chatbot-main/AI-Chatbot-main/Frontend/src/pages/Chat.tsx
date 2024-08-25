import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Chatitem from "../components/chat/Chatitem";
import { BiSend } from "react-icons/bi";
import { deleteUserChats, getUserChats, sendChatRequest } from "../helpers/api-communicator";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Chat = () => {

  type Message = {
    role: "user" | "assistant";
    content: string;
  };

  const navigate = useNavigate()
;  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [chatMessage, setchatMessage] = useState<Message[]>([]);
  const handleAction = async () => {
    // console.log(inputRef.current?.value);
    const content = inputRef.current?.value as string;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role:"user", content };
    setchatMessage((prev) => [...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setchatMessage([...chatData.chats])

  };

  const handleDeleteChats = async ()=>{
    try {
      toast.loading("Deleting Chats", {id: "deletechats"});
      await deleteUserChats();
      setchatMessage([ ]);
      toast.success("Deleted Chats Successfully", {id: "deletechats"});


    } catch (error) {
      console.log(error);
      
      toast.error("Deleting Chats failed ", {id: "deletechats"});
      
    }

  }

  useEffect(()=>{
    if(!auth?.user){
      return navigate("/login")
    }
  },[auth])

useLayoutEffect(() => {
  if(auth?.isLoggedIn && auth.user){
    toast.loading("Loading Chats" , {id : "loadchats"});
    getUserChats()
      .then((data) => {
        setchatMessage([...data.chats]);
        toast.success("Successfully loaded chats" , {id : "loadchats"});
      })
      .catch((err)=>{
        console.log(err);
        toast.error("Loading Failed" , {id : "loadchats"})
        
      })

  }
}, [auth]);
  

  return (
    <>
      <div className=" w-screen h-screen bg-[#0c0e24] flex flex-col sm:flex-col lg:flex-row gap-12  ">
    <div className=" mt-10 flex flex-col">
        
        <div className=" w-screen rounded-lg flex flex-col items-center ">
          <div className="flex flex-row items-center p-4  gap-5">
            <div className=" h-8 w-8  bg-white rounded-full text-black flex flex-row items-center justify-center uppercase font-bold text-md">
              {auth?.user?.name[0]}
              {auth?.user?.name[1]}
            </div>
            <div className=" flex flex-col items-center gap-4">
              <h1 className=" font-bold text-white text-lx"> Hey <span className=" text-green-500">{auth?.user?.name}</span></h1>
              
            </div>
            
          </div>
          <button
            type="button"
            onClick={handleDeleteChats}
            className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 "
          >
            Clear Chat
          </button>
        </div>

        <div className=" flex flex-col  w-screen items-center justify-center mt-2 ">
          <div className=" px-16  py-8   rounded-t-md bg-[#ffffff] shadow-lg ring-1 ring-black/5 h-[60vh] w-[90vw] text-black text-sm overflow-auto ">
            {chatMessage.map((chat, index) => (
              <Chatitem content={chat.content} role={chat.role} key={index} />
            ))}
            
          </div>
          <div className=" w-[90vw] bg-[#000000]  flex items-center gap-5 rounded-b-md ">
            <textarea 
              ref={inputRef} required
              className=" overscroll-none inline-block align-middle h-[12vh] w-[85vw] resize-none rounded-[7px]   bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  text-white"
              placeholder=" Start writting . . . . .  "
            ></textarea>
            <button type="submit" onClick={handleAction}>
              <BiSend className=" text-3xl text-white" />
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Chat;
