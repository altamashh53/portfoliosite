import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export const Link: React.FC<LinkProps> = ({ href, children, active = false }) => {
  return (
    <a 
      href={href}
      className={`text-sm text-opacity-60 hover:text-opacity-100 transition-all ${
        active ? 'text-white text-opacity-100' : 'text-white text-opacity-60'
      }`}
    >
      {children}
    </a>
  );
};