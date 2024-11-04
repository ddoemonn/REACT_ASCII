// components/AsciiInput.tsx
"use client";

import React, { useState } from "react";

interface AsciiInputProps {
  placeholder?: string;
}

const AsciiInput: React.FC<AsciiInputProps> = ({ placeholder = "Enter text..." }) => {
  const [value, setValue] = useState("");

  return (
    <div className="font-mono text-white">
      <pre className="text-white leading-none">
        {`+----------------------+
| `}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="bg-black border-none outline-none text-white placeholder-gray-400 w-40"
        />
        {`|
+----------------------+`}
      </pre>
    </div>
  );
};

export default AsciiInput;
