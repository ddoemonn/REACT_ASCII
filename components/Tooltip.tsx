"use client";

import React, { useState, useRef, useEffect } from 'react';

interface AsciiTooltipProps {
  content: string;
  children: React.ReactNode;
}

const TOOLTIP_WIDTH = 30;

const wrapText = (text: string, maxWidth: number) => {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  words.forEach((word) => {
    if ((currentLine + word).length > maxWidth - 4) {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    } else {
      currentLine += word + ' ';
    }
  });

  if (currentLine) {
    lines.push(currentLine.trim());
  }

  return lines.map(line => `│ ${line.padEnd(maxWidth - 2)} │`);
};

export default function AsciiTooltip({ content, children }: AsciiTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const contentLines = wrapText(content, TOOLTIP_WIDTH);
  const topBorder = `┌${'─'.repeat(TOOLTIP_WIDTH - 2)}┐`;
  const bottomBorder = `└${'─'.repeat(TOOLTIP_WIDTH - 2)}┘`;

  return (
    <span className="relative inline-block" ref={triggerRef}>
      <span
        className="cursor-help border-b border-dotted "
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {children}
      </span>
      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute z-10 mt-2 font-mono text-white bg-black p-1 rounded shadow-lg"
          
        >
          <pre className="leading-tight text-xs">
{`${topBorder}
${contentLines.join('\n')}
${bottomBorder}`}
          </pre>
        </div>
      )}
    </span>
  );
}