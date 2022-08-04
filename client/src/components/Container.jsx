import React, { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import styles from "./styles.module.css";
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeInitialMessages((messages) => setMessages(messages));
    subscribeChat((message) => {
      setMessages((prev) => [...prev, { message }]);
    });
  }, []);
  return (
    <div className={styles.container}>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
