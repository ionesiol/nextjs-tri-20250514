'use client';

import { useState } from 'react';

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['サイトを選択する', 'チアジョブ', 'ナースステップ', 'ソニー', 'Zoff'];
  const [selectedOption, setSelectedOption] = useState('サイトを選択する');
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-80 px-4 py-1 text-sm font-medium text-black bg-transparent border border-gray-300 rounded-md hover:bg-blue-700"
      >
        <span className="truncate">
          {selectedOption || 'サイトを選択する'}
        </span>
        <span className='ml-auto text-gray-500'>
          ▼
        </span>
      </button>

      {isOpen && (
        <ul className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-80 bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
