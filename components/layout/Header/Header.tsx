'use client';

import React, { FC, useEffect, useState } from 'react';
import { useMedia, useToggle, useLockBodyScroll } from 'react-use';
import clsx from 'clsx';

import { IconButton } from '@/components/common/IconButton';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

import Logo from '@/public/logo.svg';
import Menu from '@/public/menu.svg';
import Link from 'next/link';

export const Header: FC = ({ ...props }) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isMobile = useMedia('(max-width: 767.98px)');
  const isTablet = useMedia('(min-width: 768px)');

  useLockBodyScroll(isMenuOpen);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsBrowser(true);
    }
  }, []);

  useEffect(() => {
    if (isBrowser && !isMobile) {
      toggleMenu(false);
    }
  }, [isBrowser, isMobile, toggleMenu]);

  return (
    <header
      className={clsx(
        'relative py-6 ',
        isNavbarOpen && isTablet
          ? 'bg-white duration-300'
          : 'bg-transparent duration-300',
      )}
      role="banner"
      {...props}
    >
      <div className="container flex items-center xl:gap-[271px] mdOnly:justify-between">
        {isMenuOpen ? (
          isBrowser && isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />
        ) : (
          <div className="flex md:w-[128px] smOnly:w-full smOnly:justify-between">
            <Link
              href="/"
              aria-label="Link to main page"
              className="md:justify-self-start"
            >
              <Logo
                className={clsx(
                  'h-6 w-[100px] md:h-8 md:w-[128px]',
                  isNavbarOpen && isTablet ? 'fill-dark ' : 'fill-white',
                )}
                aria-label="Logo site"
              />
            </Link>

            {isBrowser && isMobile && !isMenuOpen && (
              <IconButton
                className="text-white duration-300 hover:fill-accent focus:fill-accent"
                type="button"
                aria-label="Toggle menu"
                onClick={() => toggleMenu()}
              >
                {isMobile && (
                  <Menu
                    className="h-7 w-7 fill-white duration-300 hover:fill-accent focus:fill-accent"
                    aria-label="Menu"
                  />
                )}
              </IconButton>
            )}
          </div>
        )}

        {isBrowser && isTablet && <Navbar handleOpen={setIsNavbarOpen} />}
      </div>
    </header>
  );
};
