import "./chatHeader.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { FiMinusCircle } from "react-icons/fi";
import { SiChatbot } from "react-icons/si";

export default function ChatHeader() {
  return (
    <div className="flex-row-center chat-head">
      <TbReload className="icons reload" />

      <div className="flex-row-center logo-txt">
        <div className="flex-col-center chatbot-icon">
          <SiChatbot />
        </div>

        <span className="txts">TechkillaBot</span>
      </div>
      <FiMinusCircle className="icons" />
    </div>
  );
}
