"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const UserNameForm = () => {
  return (
    <form
      action=""
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
          placeholder="Enter your name"
          className="p-4 !placeholder-gray-500 italic dark:placeholder-[#a3a2a2]"
        />
      </div>

      <Button
        type="button"
        className="bg-card w-full ml:self-end ml:w-[150px]"
        variant={"outline"}
      >
        Submit
      </Button>
    </form>
  );
};

export default UserNameForm;
