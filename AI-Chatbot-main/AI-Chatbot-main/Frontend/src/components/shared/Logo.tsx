import logo from "/icons8-discord-bot.svg" 
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <>
    <div className=" flex flex-row items-center gap-3"> 
      <Link to={"/"}><img className=" ml-10 h-10" src={logo} alt="" /></Link>
      <Link to={"/"}><h1 className=" text-2xl text-green-600">ChatBot</h1></Link>
    </div>
    </>
  )
}

export default Logo
