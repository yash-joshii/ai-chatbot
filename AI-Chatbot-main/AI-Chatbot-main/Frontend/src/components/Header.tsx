import React from "react";
import Logo from "./shared/Logo";  
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <>
      <div id="header" className="  w-screen h-20 m20 fixed  bg-transparent  flex flex-row  items-center justify-between uppercase font-semibold  ">
        <Logo />
        <div className=" flex flex-row gap-5 mr-20">
          {auth?.isLoggedIn ? (
            <>


              <NavigationLink
                bg="#00fffc"
                to="/chat"
                text=" Chat"
                textColor="black"
              />
              <NavigationLink
              bg="#51538f"
              to="/"
              text="Logout"
              textColor="white"
              onClick={auth.logout} />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/Login"
                text="Login"
                textColor="black"
              />
              <NavigationLink
              bg="#51538f"
              to="/signup"
              text="Signup"
              textColor="white"
               />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
