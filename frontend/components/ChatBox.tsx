import React from "react";
import ChatMessageForm from "./ChatMessageForm";
import ChatContent from "./ChatContent";

export const ChatBox = () => {
  return (
    <section className="flex flex-col gap-3 items-start max-w-[500px] h-[500px] ml:h-[600px] w-full bg-card justify-center shadow-lg rounded-md py-5 px-4 ml:px-5 ml:py-6 -mt-20 ">
      <h1 className="text-[18px] pl-2">Live Chat Room</h1>
      <div className="flex flex-col gap-3 w-full h-[460px] bg-card rounded-2xl overflow-auto">
        <ChatContent
          fromWho="self"
          sender="Neshi"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo nostrum exercitationem mollitia corporis corrupti, provident necessitatibus aliquid expedita suscipit. Delectus soluta magni dolorem quo beatae quisquam adipisci asperiores aperiam."
        />
        <ChatContent
          fromWho="other"
          sender="Neshi"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo nostrum exercitationem mollitia corporis corrupti, provident necessitatibus aliquid expedita suscipit. Delectus soluta magni dolorem quo beatae quisquam adipisci asperiores aperiam."
        />
      </div>
      <ChatMessageForm />
    </section>
  );
};

export default ChatBox;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo nostrum exercitationem mollitia corporis corrupti, provident necessitatibus aliquid expedita suscipit. Delectus soluta magni dolorem quo beatae quisquam adipisci asperiores aperiam.
