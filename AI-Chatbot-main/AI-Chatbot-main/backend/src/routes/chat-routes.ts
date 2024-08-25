import { Router } from "express";
import { verifyToken } from "../utils/tokens-manager.js";
import { chatCompletationValidator, validate } from "../utils/validators.js";
import { deleteChats, generateChatCompletion, sendChatsToUser } from "../controllers/chat-controllers.js";

const chatRouter = Router();
chatRouter.post(
  "/new",
  validate(chatCompletationValidator),
  verifyToken,
  generateChatCompletion
);
chatRouter.get("/all-chats", verifyToken, sendChatsToUser);
chatRouter.delete("/delete", verifyToken, deleteChats);

export default chatRouter;
