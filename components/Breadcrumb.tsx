// components/AsciiBreadcrumb.tsx
import React from 'react';

interface AsciiBreadcrumbProps {
  items: { label: string; onClick: () => void }[]; // Update to use clickable items
  separator?: string;
}

const AsciiBreadcrumb: React.FC<AsciiBreadcrumbProps> = ({ items, separator = ' > ' }) => {
  return (
    <pre className="font-mono flex flex-col text-white bg-black p-2">
    <div>
        {`+${'-'.repeat(items.length * 10)}+`} {/* Adjust width dynamically */}
    </div>
    <div className='flex'>
        {items.map((item, index) => (
            <>
            <span key={index} onClick={item.onClick} className="cursor-pointer hover:underline">
                <pre>{`${item.label}`}</pre>
            </span>
            {index < items.length - 1 && <pre>{separator}</pre>}
            </>
        ))}
   
    </div>
    <div>
         {`+${'-'.repeat(items.length * 10)}+`}
    </div>
    </pre>
  );
};

export default AsciiBreadcrumb;
