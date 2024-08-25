import user from "../models/users.js";
import { hashSync, compare } from "bcrypt";
import { createToken } from "../utils/tokens-manager.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await user.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const userSignup = async (req, res, next) => {
  try {
    //user signup
    const { name, email, password } = req.body;
    const existingUser = await user.findOne({ email });
    if (existingUser) return res.status(401).send("User is already registered");
    const hashedPassward = await hashSync(password, 10);
    const users = new user({ name, email, password: hashedPassward });
    await users.save();

    //it will create token and store cookie
    res.clearCookie("auth_token",{
        path:"/",
      domain: "localhost",
      httpOnly:true,
      signed:true
    })

    // it will create a token and will validate for 7 days only
    const token = createToken(users._id.toString(), users.email, "7d");
    const expires = new Date()
    expires.setDate(expires.getDate()+7)
    res.cookie("auth_token", token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly:true,
      signed:true
    });

    return res.status(201).json({ message: "OK", name:users.name , email:users.email });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const userLogin = async (req, res, next) => {
  try {
    //user Login
    const { email, password } = req.body;
    const users = await user.findOne({ email });
    if (!users) return res.status(401).send("User not registered");

    const isPasswordCorrect = await compare(password, users.password);
    if (!isPasswordCorrect) {
      return res.status(403).send("Password is incorrect ");
    }

    //it will create token and store cookie

    res.clearCookie("auth_token",{
        path:"/",
      domain: "localhost",
      httpOnly:true,
      signed:true
    })

    // it will create a token and will validate for 7 days only
    const token = createToken(users._id.toString(), users.email, "7d");
    const expires = new Date()
    expires.setDate(expires.getDate()+7)
    res.cookie("auth_token", token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly:true,
      signed:true
    });

    return res.status(200).json({ message: "OK", name:users.name , email:users.email });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};


export const verifyUser = async (req, res, next) => {
  try {
    //user Login
    const users = await user.findById(res.locals.jwtData.id);
   
    if (!users) return res.status(401).send("User not registered");
    console.log(users._id.toString(),res.locals.jwtData.id );

    if (users._id.toString()!== res.locals.jwtData.id ) {
        return res.status(401).send("Permission didn't match")
    }

    return res.status(200).json({ message: "OK", name:users.name , email:users.email });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};


export const userLogout = async (req, res, next) => {
  try {
    //user Login
    const users = await user.findById(res.locals.jwtData.id);
   
    if (!users) return res.status(401).send("User not registered");
    console.log(users._id.toString(),res.locals.jwtData.id );

    if (users._id.toString()!== res.locals.jwtData.id ) {
        return res.status(401).send("Permission didn't match")
    }

    res.clearCookie("auth_token",{
      path:"/",
    domain: "localhost",
    httpOnly:true,
    signed:true
  })

    return res.status(200).json({ message: "OK", name:users.name , email:users.email });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};