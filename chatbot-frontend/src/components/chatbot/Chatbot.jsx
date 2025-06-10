import { useState } from "react";
import "./chatbot.scss";
import { SiChatbot } from "react-icons/si";
import { FaRightLong } from "react-icons/fa6";
import chatbotFlow from "./../../data/chatbotFlow.js";
import ChatHeader from "../chatHeader/ChatHeader.jsx";
import { VscSend } from "react-icons/vsc";
import logo from "../../../public/logo-01.png";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: chatbotFlow.start.message },
  ]);
  const [step, setStep] = useState("start");
  const [currentStepData, setCurrentStepData] = useState(chatbotFlow["start"]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptionData, setSelectedOptionData] = useState({});

  const [userData, setUserData] = useState({
    name: "",
    company: "",
    interest: "",
    product: "",
    lastAction: "",
    history: [],
  });

  const updateUserData = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const logHistory = (from, text) => {
    setUserData((prev) => ({
      ...prev,
      history: [...prev.history, { from, text }],
    }));
  };

  const restartBot = () => {
    setMessages([{ from: "bot", text: chatbotFlow.start.message }]);
    setStep("start");
    setCurrentStepData(chatbotFlow["start"]);
    setUserData({
      name: "",
      company: "",
      interest: "",
      product: "",
      lastAction: "",
      history: [],
    });
  };

  const handleUserInput = (input) => {
    const newMessages = [...messages, { from: "user", text: input }];
    logHistory("user", input);

    if (step === "start") {
      updateUserData({ name: input });
    } else if (step === "getCompany") {
      updateUserData({ company: input });
    }

    const nextStep = currentStepData.next;
    setStep(nextStep);

    if (typeof chatbotFlow[nextStep] === "function") {
      const nextStepData = chatbotFlow[nextStep](input);
      setCurrentStepData(nextStepData);
      setMessages([
        ...newMessages,
        { from: "bot", text: nextStepData.message },
      ]);
      logHistory("bot", nextStepData.message);
    } else if (typeof chatbotFlow[nextStep] === "object") {
      const nextStepData = chatbotFlow[nextStep];
      setCurrentStepData(nextStepData);
      setMessages([
        ...newMessages,
        { from: "bot", text: nextStepData.message },
      ]);
      logHistory("bot", nextStepData.message);
    }

    setInputValue("");
  };

  const handleOptionClick = (optionObj) => {
    const selected = optionObj.option;
    const newMessages = [
      ...messages,
      { from: "user", text: `${optionObj.number}️. ${selected}` },
    ];
    logHistory("user", `${optionObj.number}️⃣ ${selected}`);

    if (step === "mainMenu") {
      // main menu
      updateUserData({ interest: selected });
      const nextStep = chatbotFlow[step].next[optionObj.number];
      const botStep = chatbotFlow[nextStep];
      if (botStep?.message) {
        newMessages.push({ from: "bot", text: botStep.message });
        logHistory("bot", botStep.message);
      }
      setStep(nextStep);
      setCurrentStepData(botStep);
      setMessages(newMessages);
    } else if (step === "subOptions") {
      // sub options
      updateUserData({ lastAction: selected });
      const nextStep = chatbotFlow[step].next;
      const botStep = chatbotFlow[nextStep];
      const selectedNumber = optionObj.number;

      const botMsg =
        selectedNumber === 1
          ? selectedOptionData.videoLink
          : selectedNumber === 2
          ? selectedOptionData.price
          : "Our Expert Team will be in touch with you soon!";

      newMessages.push({ from: "bot", text: botMsg });
      logHistory("bot", botMsg);

      if (selectedNumber === 3) {
        updateUserData({ lastAction: "talkToExpert" });
        const menuOnlyStep = {
          message: "Would you like to return to the main menu?",
          options: [{ option: "Menu", number: 1 }],
        };
        newMessages.push({ from: "bot", text: menuOnlyStep.message });
        logHistory("bot", menuOnlyStep.message);
        setCurrentStepData(menuOnlyStep);
        setMessages(newMessages);
        setStep(nextStep);
      } else {
        setCurrentStepData(botStep);
        if (botStep?.message) {
          newMessages.push({ from: "bot", text: botStep.message });
          logHistory("bot", botStep.message);
        }

        setStep(nextStep);
        setMessages(newMessages);
      }
    } else if (step === "end") {
      // end
      const selectedEndNumber = optionObj.number;
      if (selectedEndNumber === 1) {
        restartBot();
      } else if (selectedEndNumber === 2) {
        newMessages.push({
          from: "bot",
          text: "Our Expert Team will be in touch with you soon!",
        });
        const menuOnlyStep = {
          message: "Would you like to return to the main menu?",
          options: [{ option: "Menu", number: 1 }],
        };
        newMessages.push({ from: "bot", text: menuOnlyStep.message });
        setCurrentStepData(menuOnlyStep);
        setMessages(newMessages);
      }
    } else {
      updateUserData({
        product: selected,
        lastAction: "selectedProduct",
      });

      newMessages.push({ from: "bot", text: optionObj.subMessage });

      if (step === "customSolutions") {
        newMessages.push({
          from: "bot",
          text: "Our Expert Team will be in touch with you soon!",
        });
        const menuOnlyStep = {
          message: "Would you like to return to the main menu?",
          options: [{ option: "Menu", number: 1 }],
        };
        setCurrentStepData(menuOnlyStep);
        setMessages(newMessages);
        setStep("end");
        return;
      }

      newMessages.push({
        from: "bot",
        text: chatbotFlow.subOptions.message,
      });
      logHistory("bot", optionObj.subMessage);
      logHistory("bot", chatbotFlow.subOptions.message);

      setSelectedOptionData({
        price: optionObj.price,
        videoLink: optionObj.videoLink,
      });
      setStep("subOptions");
      setCurrentStepData(chatbotFlow.subOptions);
      setMessages(newMessages);
    }
  };

  console.log(userData);

  return (
    <div className="chatbot-box">
      <ChatHeader />
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div
            className={`flex-row-center ${
              msg.from === "bot" ? "message-part-bot" : "message-part"
            }`}
            key={i}
          >
            {msg.from === "bot" && (
              <div className="flex-col-center chatbot-icon">
                <SiChatbot />
              </div>
            )}
            <div className={`message ${msg.from}`}>{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        {currentStepData?.input && (
          <form className="flex-row-center input-row">
            <input
              className="message-input"
              value={inputValue}
              placeholder="Type your message here..."
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleUserInput(inputValue)
              }
            />
            <VscSend
              onClick={() => handleUserInput(inputValue)}
              className="send-icon"
            />
          </form>
        )}
      </div>

      {currentStepData?.options && (
        <div className="flex-row-center otp-container">
          <div className="flex-col-center chatbot-icon">
            <SiChatbot />
          </div>
          <div className="flex-col-center options">
            {currentStepData.options.map((opt, i) => (
              <div className="flex-row-center opt-bg">
                <button key={i} onClick={() => handleOptionClick(opt)}>
                  {opt.number}️. {opt.option}
                </button>
                <div className="flex-col-center arrow-icon">
                  <FaRightLong />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex-row-center poweredBy">
        <p className="powerTxt">Powered by </p>
        <img alt="techkilla" src={logo} className="logopower" />
        <p className="powerTxt">Techkilla.</p>
      </div>
    </div>
  );
}
