import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center w-full">
      <div className="flex items-center ml-4">
        <Image src="/WS-logo.svg" alt="Logo" width={60} height={60} className='w-auto h-auto' priority />
      </div>
    </header>
  );
};

export default Header;
