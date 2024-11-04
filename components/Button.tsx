// components/AsciiButton.tsx
"use client";

import React from "react";

interface AsciiButtonProps {
  label: string;
  onClick?: () => void;
}

const AsciiButton: React.FC<AsciiButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative font-mono text-white rounded-xl bg-transparent"
    >
      <pre className="text-white text-center leading-tight">
        {`+-------------+
| ${label} |
+-------------+`}
      </pre>
    </button>
  );
};

export default AsciiButton;
