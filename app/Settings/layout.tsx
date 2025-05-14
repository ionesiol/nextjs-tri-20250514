'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import InputField from '../InputField/page';
import DropDown from '../DropDown/page';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMiddle, setIsOpenMiddle] = useState(false);
  const [isOpenBold, setIsOpenBold] = useState(false);

  const navItems = [
    { href: '/Settings/Chiajobu', label: 'チアジョブ' },
    { href: '/Settings/Nursestep', label: 'ナースステップ' },
    { href: '/Settings/Sony', label: 'ソニー' },
    { href: '/Settings/Zoff', label: 'Zoff' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <aside className="bg-inherit text-black p-4">
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded ${
                      isActive ? 'bg-sky-500 text-white' : 'hover:bg-sky-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="flex-1">
        {/* 大見出しボタン */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 w-screen bg-gray-200 text-black rounded hover:bg-gray-400 transition text-left"
        >
          大見出し
          <span className='ml-auto text-black'>
            ▼
          </span>
        </button>

        {/* 大見出しセクション */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4 mb-4">
            <InputField label="タグ" id="tag" placeholder="キーワードを入力" />
            <div className="flex items-start space-x-4">
              <p className="text-lg font-medium text-gray-700 whitespace-nowrap">
                Wordにおけるスタイル：
              </p>
              <div className="flex flex-col space-y-4">
                <DropDown />
                <InputField label="スタイル2" id="style2" placeholder="入力2" />
                <InputField label="スタイル3" id="style3" placeholder="入力3" />
                <InputField label="スタイル4" id="style4" placeholder="入力4" />
              </div>
            </div>
            <InputField label="id名" id="id" placeholder="section1" />
            <InputField label="クラス名" id="className" placeholder="なし" />
            <InputField label="style" id="style" placeholder="なし" />
            <InputField label="前にある文字列" id="prefix" placeholder="なし" />
            <InputField label="後ろにある文字列" id="suffix" placeholder="なし" />
          </div>
        </div>

        {/* 中見出しボタン */}
        <button
          onClick={() => setIsOpenMiddle(!isOpenMiddle)}
          className="px-4 py-2 w-screen bg-gray-200 text-black rounded hover:bg-gray-400 transition text-left"
        >
          中見出し
          <span className='ml-auto text-black'>
            ▼
          </span>
        </button>

        {/* 中見出しセクション */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpenMiddle ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4 mb-4">
            <InputField label="中見出しタグ" id="middleTag" placeholder="キーワードを入力" />
            <InputField label="中見出しスタイル" id="middleStyle" placeholder="スタイルを入力" />
          </div>
        </div>

        {/* 太字ボタン */}
        <button
          onClick={() => setIsOpenBold(!isOpenBold)}
          className="px-4 py-2 w-screen bg-gray-200 text-black rounded hover:bg-gray-400 transition text-left"
        >
          太字
          <span className='ml-auto text-black'>
            ▼
          </span>
        </button>

        {/* 太字セクション */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpenBold ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4 mb-4">
            <InputField label="太字タグ" id="boldTag" placeholder="キーワードを入力" />
            <InputField label="太字スタイル" id="boldStyle" placeholder="スタイルを入力" />
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
