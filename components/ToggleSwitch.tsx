// components/AsciiToggleSwitch.tsx
"use client";

import React, { useState } from "react";

const AsciiToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div onClick={toggleSwitch} className="font-mono text-white cursor-pointer select-none">
      <pre className="leading-none">
        {`[ ${isOn ? "|" : " "} ] ${isOn ? "ON" : "OFF"}`}
      </pre>
    </div>
  );
};

export default AsciiToggleSwitch;
