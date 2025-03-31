"use client";

import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeftCircle className="size-6 rounded-full active:scale-90" />
    </button>
  );
};

export default GoBackButton;
