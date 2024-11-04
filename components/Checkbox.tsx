// components/AsciiCheckbox.tsx
"use client";

import React, { useState } from "react";

interface AsciiCheckboxProps {
  label: string;
}

const AsciiCheckbox: React.FC<AsciiCheckboxProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <div onClick={toggleCheckbox} className="font-mono text-white cursor-pointer select-none">
      <pre className="leading-none">
        {`[${isChecked ? "X" : " "}] ${label}`}
      </pre>
    </div>
  );
};

export default AsciiCheckbox;
