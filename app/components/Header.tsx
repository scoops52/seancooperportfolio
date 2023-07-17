'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navItems = ["about", "portfolio", "skills", "contact"]
  return (
    <header className='bg-gray-200 text-gray-900 font-raleway py-4 fixed top-0 left-0 right-0 z-10'>
        <nav className='container mx-auto flex justify-between items-center'>
            <div className='flex items-center'>
                <Link href='/'>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={100}
                        height={50}
                    />
                </Link>
            </div>
            <div className='hidden lg:block'>
            <ul className='flex items-center'>
                {navItems.map((item, index) => (
                    <li key={index} className='mx-4 hover:text-gray-300'>
                        <Link href={`/${item}`}>{item}</Link>
                    </li>
                ))}
                <li className='mx-4 hover:text-gray-300'>
                    <Link href='/about'>
                        <FaLinkedin size={24} />
                    </Link>
            </li>
            <li className='mx-4 hover:text-gray-300'>
                    <Link href='/about'>
                        <FaGithub size={24} />
                    </Link>
            </li>
            </ul>
            </div>
            <div className='block lg:hidden'>
                <button className='flex items-center px-3 py-2 border rounded text-gray-900 border-gray-900 hover:text-gray-300 hover:border-gray-300'
                  onClick={toggleMenu}
                >
                    Menu
                </button>
            </div>
            {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-100">
            <ul className="flex flex-col space-y-2 py-2">
              {navItems.map((item, index) => (
                <li key={index} className="px-4 py-2 hover:text-gray-300">
                  <Link href={`/${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
            </div>)}
        </nav>
    </header>
  )
}

export default Header
