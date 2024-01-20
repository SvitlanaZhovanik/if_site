import React, { FC } from 'react';
import Link from 'next/link';

import { IconButton } from '@/components/common/IconButton';
import { Navbar } from '../Navbar';

import Logo from '@/public/logo.svg';
import Close from '@/public/close.svg';

type MobileMenuProps = {
  toggleMenu: () => void;
};

export const MobileMenu: FC<MobileMenuProps> = ({ toggleMenu }) => {
  return (
    <div className="absolute left-0 top-0 z-30 h-screen w-full border bg-white py-6 md:hidden">
      <div className="container">
        <div className="mb-[50px] flex items-center justify-between">
          <Link href="/" aria-label="Link to main page">
            <Logo
              className="h-6 w-[100px] fill-dark md:h-8 md:w-[128px]"
              aria-label="Logo site"
              onClick={() => toggleMenu()}
            />
          </Link>
          <IconButton
            className="text-dark duration-300 hover:fill-accent focus:fill-accent"
            type="button"
            aria-label="Open menu"
            onClick={() => toggleMenu()}
          >
            <Close className="h-7 w-7 fill-dark duration-300 hover:fill-accent focus:fill-accent" />
          </IconButton>
        </div>
        <Navbar closeMenu={toggleMenu} />
      </div>
    </div>
  );
};
