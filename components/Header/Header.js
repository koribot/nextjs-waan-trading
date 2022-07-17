import React from 'react';
import Link from 'next/link';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Header = () => {
  return (
    <header className="flex justify-center bg-gray-50 drop-shadow-lg">
      <nav className="flex h-12 justify-between items-center w-nav-w">
        <Link href="/">Waan Trading</Link>
        <div className="flex items-center justify-between w-40">
          <SearchOutlinedIcon className="cursor-pointer" />
          <Link href="/cart">
            <LocalMallOutlinedIcon />
          </Link>
          <p>|</p>
          <Link href="/login">
            <a>Login </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
