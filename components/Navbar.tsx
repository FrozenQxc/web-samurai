'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full mx-auto p-5 bg-gray-800">
      {/* Логотип и название */}
      <div className="flex items-center gap-2 text-white">
        <Image alt="logo" src="/3.png" width={65} height={65} />
        <label className="text-xl font-semibold">WebSamurai</label>
      </div>

      {/* Кнопка для мобильного меню */}
      <button 
        className="md:hidden text-lime-500 text-2xl" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '×' : '☰'}
      </button>

      {/* Навигация */}
      <div className={`md:flex gap-10 items-center text-lime-500 text-[20px] ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <Link
          className="hover:text-lime-300 transition-colors duration-300"
          href="/works"
        >
          Мои работы
        </Link>

        <Link
          className="hover:text-lime-300 transition-colors duration-300"
          href="/"
        >
          Обо мне
        </Link>

        <Link
          className="hover:text-lime-300 transition-colors duration-300"
          href="/test"
        >
          Тест
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
