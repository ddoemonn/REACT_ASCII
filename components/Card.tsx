interface AsciiCardProps {
  title: string;
  content: string;
  footer?: string;
}

const AsciiCard: React.FC<AsciiCardProps> = ({ title, content, footer }) => {
  const cardWidth = Math.max(title.length, content.length) + 4; // Dynamic width based on content

  const topBorder = `+${'-'.repeat(cardWidth)}+`;
  const titleLine = `| ${title} |`;
  const contentLine = `| ${content} |`;
  const footerLine = footer ? `| ${footer} |` : '';

  return (
    <pre className="font-mono text-white bg-black p-2">
      {topBorder}
      {titleLine.padEnd(cardWidth + 1)}
      topBorder
      {contentLine.padEnd(cardWidth + 1)}
      {footerLine.padEnd(cardWidth + 1)}
      {topBorder}
    </pre>
  );
};

export default AsciiCard;
