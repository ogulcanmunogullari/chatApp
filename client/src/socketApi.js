import io from "socket.io-client";
let socket;
export const init = () => {
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
};

export const sendMessage = (message) => {
  if (socket) {
    socket.emit("new-message", message);
  }
};
export const subscribeChat = (callBack) => {
  if (socket) {
    socket.on("receive-message", (message) => {
      callBack(message);
    });
  }
};
export const subscribeInitialMessages = (callBack) => {
  if (socket) {
    socket.on("message-list", (message) => {
      callBack(message);
    });
  }
};
