// components/AsciiDropdown.tsx
"use client";

import React, { useState } from "react";

interface AsciiDropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

const AsciiDropdown: React.FC<AsciiDropdownProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="font-mono text-white cursor-pointer">
      {/* Dropdown Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-2 py-1 bg-black"
      >
        <pre>{`| ${selectedOption || label} |`}</pre>
        <pre>{isOpen ? "▲" : "▼"}</pre>
      </div>

      {/* ASCII border under header */}
      <pre>{`+${"-".repeat(label.length + 2)}+`}</pre>

      {/* Options List */}
      {isOpen && (
        <div className="bg-black">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-2 py-1"
            >
              <pre>{`| ${option.padEnd(label.length)} |`}</pre>
            </div>
          ))}
          {/* ASCII border at the bottom */}
          <pre>{`+${"-".repeat(label.length + 2)}+`}</pre>
        </div>
      )}
    </div>
  );
};

export default AsciiDropdown;
