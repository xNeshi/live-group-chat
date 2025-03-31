import React from "react";

export const ChatsPage = async () => {
  const res = await fetch("http://localhost:8080/api/chats");
  console.log(res);
  return <div>ChatsPage</div>;
};

export default ChatsPage;
