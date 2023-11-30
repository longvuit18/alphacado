import React, { ReactNode } from 'react';

const Tooltip = ({ text, className, children }: { text?: string, className?: string, children?: ReactNode }) => {
  return (
    <div className="relative inline-block">
      <div className="group inline-block">
        {children}
        <div className={`${className} mt-1 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 absolute z-10 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap`}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;