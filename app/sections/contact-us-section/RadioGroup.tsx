"use client";

import RadioButton from "@/components/ui/RadioButton";
import { useState } from "react";

export default function RadioGroup() {
  const [contactType, setContactType] = useState("hi");

  return (
    <div className="mb-6 flex gap-9 md:mb-8">
      <RadioButton
        label="Say Hi"
        checked={contactType === "hi"}
        onClick={() => setContactType("hi")}
      />
      <RadioButton
        label="Get a Quote"
        checked={contactType === "quote"}
        onClick={() => setContactType("quote")}
      />
    </div>
  );
}
