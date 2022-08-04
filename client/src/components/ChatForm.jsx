import { useState } from "react";
import { useChat } from "../context/ChatContext";
import { sendMessage } from "../socketApi";
import styles from "./styles.module.css";

function ChatForm() {
  const [message, setMessage] = useState("");
  const { setMessages, messages } = useChat();
  function handleSubmit(e) {
    e.preventDefault();
    setMessages((old) => [...old, { message: message, fromMe: true }]);
    sendMessage(message);
    setMessage("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputFlex}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textInput}
          />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatForm;
