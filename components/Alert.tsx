// components/AsciiAlert.tsx
"use client";

import React from "react";

interface AsciiAlertProps {
  type: "info" | "warning" | "alert";
  message: string;
}

const getAlertLabel = (type: "info" | "warning" | "alert") => {
  switch (type) {
    case "info":
      return "INFO";
    case "warning":
      return "WARNING";
    case "alert":
      return "ALERT";
    default:
      return "";
  }
};

const AsciiAlert: React.FC<AsciiAlertProps> = ({ type, message }) => {
  const label = getAlertLabel(type);
  const boxWidth = Math.max(message.length, label.length) + 4;

  // Create top and bottom borders based on box width
  const borderLine = `+${"-".repeat(boxWidth)}+`;

  return (
    <div className="font-mono text-white bg-black p-2">
      <pre className="leading-none">
        {borderLine}
        {`\n| ${label.padEnd(boxWidth - 1)}|`}
        {`\n| ${message.padEnd(boxWidth - 1)}|`}
        {`\n${borderLine}`}
      </pre>
    </div>
  );
};

export default AsciiAlert;
