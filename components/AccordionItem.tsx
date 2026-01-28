'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="container mx-auto px-4 mb-3">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-primary rounded-2xl px-6 py-4 flex justify-between items-center 
                   transition-all duration-200 hover:bg-primary-light"
        aria-expanded={isOpen}
      >
        <h5 className="text-white text-lg md:text-xl font-extrabold">
          {title}
        </h5>
        <ChevronDown 
          className={`text-white w-6 h-6 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-secondary-gray py-4 px-6 rounded-b-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}