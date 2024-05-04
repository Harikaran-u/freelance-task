import { useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import "../styles/messenger.css";
import { ChangeEvent, FormEvent, useState } from "react";

const Messenger = () => {
  const [chatText, setChatText] = useState<string>("");
  const { username } = useParams();
  const handleChatText = (e: ChangeEvent<HTMLInputElement>) => {
    setChatText(e.target.value);
  };

  const handleChatSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatText("");
  };

  return (
    <div className="chat-main-container">
      <div className="chat-user-profile-container">
        <img
          src="https://res.cloudinary.com/diuvnny8c/image/upload/v1708271782/User-Profile-PNG-Image_eyvnnm.png"
          className="chat-profile-img"
        />
        <h2 className="chat-username">{username}</h2>
      </div>
      <form className="chat-input-container" onSubmit={handleChatSubmit}>
        <input
          type="text"
          placeholder="ask something..."
          className="chat-input"
          value={chatText}
          onChange={handleChatText}
        />
        <button type="submit" className="chat-submit-btn">
          <IoSend fill="#41B06E" />
        </button>
      </form>
    </div>
  );
};

export default Messenger;
