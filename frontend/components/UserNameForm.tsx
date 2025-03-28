"use client";

import React, { use, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useWebSocket } from "@/lib/hooks/useWebSocket";
import { useRouter } from "next/navigation";

export const UserNameForm = () => {
  const route = useRouter();
  const [username, setUsername] = useState("");
  const { setUsername: setUser } = useWebSocket();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(username);
    setUsername("");
    route.push("/room");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 items-start max-w-[400px] w-full bg-card justify-center shadow-lg rounded-md py-6 px-6 -mt-30"
    >
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="username">
          <strong>Username</strong>
        </label>
        <Input
          type="username"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername((prev) => (prev = e.target.value))}
          placeholder="Enter your name"
          className="p-4 py-5 !bg-background !placeholder-gray-500 !placeholder-italic dark:placeholder-[#a3a2a2]"
        />
      </div>

      <Button
        type="submit"
        className="bg-card w-full ml:self-end ml:w-[150px]"
        variant={"outline"}
      >
        Submit
      </Button>
    </form>
  );
};

export default UserNameForm;
