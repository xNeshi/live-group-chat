"use client";

import React, { use, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useWebSocket } from "@/lib/hooks/useWebSocket";
import { useRouter } from "next/navigation";
import z, { ZodError } from "zod";
import { usernameSchema } from "@/lib/validations";

export const UserNameForm = () => {
  const route = useRouter();
  const [error, setError] = useState<Record<string, string>>();
  const [username, setUsername] = useState("");
  const { setUsername: setUser } = useWebSocket();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      usernameSchema.parse({ username: username });
      setUser(username);
      setUsername("");
      route.push("/room");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setError(fieldErrors as unknown as Record<string, string>);
      }
    }
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
        {error?.username && (
          <div className="text-red-500 text-[11px] pl-1 mm:text-[13px]">
            <p>{error.username}</p>
          </div>
        )}
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
