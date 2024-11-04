// components/AsciiTable.tsx
import React from 'react';

interface AsciiTableProps {
  headers: string[];
  rows: string[][];
  borderStyle?: 'single' | 'double' | 'none';
}

const borderChars = {
  single: {
    topLeft: '+',
    topRight: '+',
    bottomLeft: '+',
    bottomRight: '+',
    horizontal: '-',
    vertical: '|',
    cross: '+',
  },
  double: {
    topLeft: '#',
    topRight: '#',
    bottomLeft: '#',
    bottomRight: '#',
    horizontal: '=',
    vertical: '||',
    cross: '#',
  },
  none: {
    topLeft: '',
    topRight: '',
    bottomLeft: '',
    bottomRight: '',
    horizontal: ' ',
    vertical: ' ',
    cross: ' ',
  },
};

const AsciiTable: React.FC<AsciiTableProps> = ({ headers, rows, borderStyle = 'single' }) => {
  const border = borderChars[borderStyle];

  // Calculate the maximum width needed for each column based on headers and rows
  const columnWidths = headers.map((header, index) => 
    Math.max(header.length, ...rows.map(row => (row[index] || '').length))
  );

  // Renders a single row, aligning cells to column widths
  const renderRow = (cells: string[]) => {
    return `${border.vertical} ${cells.map((cell, index) => cell.padEnd(columnWidths[index])).join(` ${border.vertical} `)} ${border.vertical}`;
  };

  // Renders a separator line using the specified border characters and column widths
  const renderSeparator = (leftChar: string, midChar: string, rightChar: string) => {
    return `${leftChar}${columnWidths.map(width => midChar.repeat(width + 2)).join(midChar)}${rightChar}`;
  };

  // Building the table as an array of strings for clean line breaks
  const table = [
    renderSeparator(border.topLeft, border.horizontal, border.topRight),  // Top border
    renderRow(headers),                                                    // Header row
    renderSeparator(border.cross, border.horizontal, border.cross),         // Divider below header
    ...rows.map(row => renderRow(row)),                                     // Data rows
    renderSeparator(border.bottomLeft, border.horizontal, border.bottomRight) // Bottom border
  ].join('\n');

  return (
    <pre className="font-mono text-white bg-black p-4 overflow-x-auto whitespace-pre">
      {table}
    </pre>
  );
};

export default AsciiTable;
