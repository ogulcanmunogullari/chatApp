import React from "react";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";
import styles from "./styles.module.css";
function ChatList() {
  const { messages } = useChat();
  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, index) => (
          <ChatItem key={index} item={item} />
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
