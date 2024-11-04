// components/AsciiTabs.tsx
"use client";

import React, { useState } from "react";

interface Tab {
  label: string;
  content: string;
}

interface AsciiTabsProps {
  tabs: Tab[];
}

const AsciiTabs: React.FC<AsciiTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="font-mono text-white">
      {/* Tabs */}
      <div className="flex">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer px-2 ${
              activeTab === index ? "text-yellow-500" : "text-white"
            }`}
          >
            <pre className="leading-none">
              {`| ${tab.label.padEnd(10)} |`}
            </pre>
          </div>
        ))}
      </div>

      {/* Divider */}
      <pre>{`+${"-".repeat(14 * tabs.length)}+`}</pre>

      {/* Active Tab Content */}
      <div className="pt-2">
        <pre className="leading-none">
          {`+${"-".repeat(30)}+`}
          {`\n| ${tabs[activeTab].content.padEnd(28)} |`}
          {`\n+${"-".repeat(30)}+`}
        </pre>
      </div>
    </div>
  );
};

export default AsciiTabs;
