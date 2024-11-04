// components/AsciiRadioButton.tsx
"use client";

import React, { useState } from "react";

interface AsciiRadioButtonProps {
  options: string[];
}

const AsciiRadioButton: React.FC<AsciiRadioButtonProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="font-mono text-white">
      {options.map((option) => (
        <div
          key={option}
          onClick={() => setSelectedOption(option)}
          className="cursor-pointer select-none"
        >
          <pre className="leading-none">
            {`(${selectedOption === option ? "O" : " "}) ${option}`}
          </pre>
        </div>
      ))}
    </div>
  );
};

export default AsciiRadioButton;
