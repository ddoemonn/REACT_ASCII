// components/AsciiAccordion.tsx
"use client";

import React, { useState } from "react";

interface AsciiAccordionProps {
  title: string;
  content: string;
}

const AsciiAccordion: React.FC<AsciiAccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="font-mono text-white">
      <div onClick={toggleAccordion} className="cursor-pointer">
        <pre className="leading-none">
          {`+${'-'.repeat(30)}+`}
          {`| ${isOpen ? '-' : '+'} ${title.padEnd(28)} |`}
          {`+${'-'.repeat(30)}+`}
        </pre>
      </div>
      {isOpen && (
        <pre className="leading-none">
          {content.split("\n").map((line) => `| ${line.padEnd(28)} |`).join("\n")}
          {`\n+${'-'.repeat(30)}+`}
        </pre>
      )}
    </div>
  );
};

export default AsciiAccordion;
