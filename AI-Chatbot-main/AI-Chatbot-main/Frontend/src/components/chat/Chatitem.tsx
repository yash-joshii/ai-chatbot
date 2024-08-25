import { useAuth } from "../../context/AuthContext";
import logo from "/icons8-discord-bot.svg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeFromString(Message: string) {
  if (Message.includes("```")) {
    const blocks = Message.split("```");
    return blocks;
  }
}

function isCodeBlock(str: string) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}

const Chatitem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const messageBlock = extractCodeFromString(content);
  const auth = useAuth();
  return role === "user" ? (
    <div className=" flex py-2 px-4 gap-4  ">
      <div className=" h-8 w-8 bg-black text-white  rounded-full flex items-center justify-center uppercase text-sm font-bold ">
        {auth?.user?.name[0]}
        {auth?.user?.name[1]}
      </div>
      {!messageBlock && (
        <div >
          <p className=" text-lg text-black font-mono  ">{content}</p>
        </div>
      )}
      {messageBlock &&
        messageBlock.length &&
        messageBlock.map((block) =>
          isCodeBlock(block) ? (
            <SyntaxHighlighter style={coldarkCold} language=" javascript">
              {block}
            </SyntaxHighlighter>
          ) : (
            <>
              <div>
                <p className=" text-lg text-black font-mono ">{block}</p>
              </div>
            </>
          )
        )}
    </div>
  ) : (
    <div className="  flex items-center jus py-2 px-4    gap-4">
      <div className=" h-8 w-8 ml-0 bg-white border-slate border-2  rounded-full  flex items-center justify-center ">
        <img className=" w-7" src={logo} alt="logo" />
      </div>
      <div>
        <p className=" text-lg text-[#235800c5]  ">{content}</p>
      </div>
    </div>
  );
};

export default Chatitem;
