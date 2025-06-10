import "./chatHeader.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { FiMinusCircle } from "react-icons/fi";
import { SiChatbot } from "react-icons/si";

export default function ChatHeader() {
  return (
    <div className="flex-row-center chat-head">
      <div className="flex-row-center first-icon">
        <FaArrowLeftLong className="icons" />
        <TbReload className="icons reload" />
      </div>

      <div className="flex-row-center logo-txt">
        <SiChatbot className="chatbot-icon" />
        <span className="txts">TechkillaBot</span>
      </div>
      <FiMinusCircle className="icons" />
    </div>
  );
}
