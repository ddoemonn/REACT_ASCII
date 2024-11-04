"use client";

import React, { useEffect, useRef } from "react";

interface AsciiModalProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

const MODAL_WIDTH = 40;

const wrapText = (text: string, maxWidth: number) => {
  const lines: string[] = [];
  const words = text.split(' ');
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

  return lines.map(line => `| ${line.padEnd(maxWidth - 2)} |`);
};

export default function AsciiModal({ title, content, isOpen, onClose }: AsciiModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const titleLine = `| ${title.padEnd(MODAL_WIDTH - 2)} |`;
  const contentLines = wrapText(content, MODAL_WIDTH);

  const topBorder = `+${'-'.repeat(MODAL_WIDTH - 2)}+`;
  const separator = `+${'-'.repeat(MODAL_WIDTH - 2)}+`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
      <div ref={modalRef} className="font-mono text-white bg-black p-4 rounded">
        <pre className="leading-tight whitespace-pre">
{`${topBorder}
${titleLine}
${separator}
${contentLines.join('\n')}
${separator}`}
        </pre>
        <div className="flex w-full justify-end items-center">
        <button 
          onClick={onClose}
          className=" text-left font-mono text-white hover:text-gray-300 focus:outline-none"
          aria-label="Close modal"
        >
{`| [Close] |`}
        </button>
        </div>
      </div>
    </div>
  );
}