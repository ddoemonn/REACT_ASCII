// components/AsciiProgressBar.tsx
"use client";

import React from "react";

interface AsciiProgressBarProps {
  progress: number; // Progress should be a number between 0 and 100
  symbol?: string; // Custom symbol for the filled part
  width?: number; // Width of the progress bar
}

const AsciiProgressBar: React.FC<AsciiProgressBarProps> = ({ progress, symbol = "=", width = 20 }) => {
  const filledLength = Math.round((progress / 100) * width);
  const emptyLength = width - filledLength;

  return (
    <div className="font-mono text-white">
      <pre className="leading-none">
        {`[${symbol.repeat(filledLength)}${" ".repeat(emptyLength)}] ${progress}%`}
      </pre>
    </div>
  );
};

export default AsciiProgressBar;
