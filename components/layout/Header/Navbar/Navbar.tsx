'use client';
import React, { FC, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { NavbarLink, NavbarLinkProps } from '../NavbarLink';
import { menuItems } from '../constants';

import Chevron from '@/public/chevron.svg';

type NavbarProps = {
  closeMenu?: () => void;
  handleOpen?: (arg0: boolean) => void;
};

export const Navbar: FC<NavbarProps> = ({ closeMenu, handleOpen }) => {
  const [openSolution, setOpenSolution] = useState<boolean>(false);
  const [openPartners, setOpenPartners] = useState<boolean>(false);

  const isMobile = useMedia('(max-width: 767.98px)');

  const pathname = usePathname();

  const handleOpenLink = (item: string) => {
    item === 'solutions'
      ? (setOpenPartners(false), setOpenSolution(!openSolution))
      : (setOpenSolution(false), setOpenPartners(!openPartners));
  };
  const handleCloseAll = () => {
    setOpenSolution(false);
    setOpenPartners(false);
  };

  useEffect(() => {
    if (openSolution || openPartners) {
      handleOpen && handleOpen(true);
    } else {
      handleOpen && handleOpen(false);
    }
  }, [openSolution, openPartners, handleOpen]);

  return (
    <nav
      className={clsx(
        'flex flex-col gap-6 text-dark md:flex-row md:gap-8 md:bg-transparent md:py-0 ',
        openPartners || openSolution ? 'md:text-dark' : 'md:text-white',
      )}
    >
      {isMobile &&
        menuItems.map((item: NavbarLinkProps) => {
          return item.links ? (
            <div key={item.title.toLowerCase()} className="md:flex md:flex-col">
              <button
                type="button"
                className="mb-3 flex w-full justify-between py-[6px] pr-4 text-sm font-medium duration-300 hover:text-accent focus:text-accent"
                onClick={() => handleOpenLink(item.title.toLowerCase())}
              >
                {item.title}
                <Chevron
                  width={20}
                  height={20}
                  className={clsx(
                    'ml-2 block h-5 w-5 fill-dark duration-300 hover:fill-accent focus:fill-accent',
                    openSolution && item.title.toLowerCase() === 'solutions'
                      ? 'rotate-180 transform duration-300'
                      : '',
                    openPartners && item.title.toLowerCase() === 'partners'
                      ? 'rotate-180 transform duration-300'
                      : '',
                  )}
                />
              </button>

              {openSolution && item.title.toLowerCase() === 'solutions' && (
                <ul className="ml-5 flex flex-col gap-5 md:flex-wrap">
                  {item.links.map(link => (
                    <li
                      key={link.title.toLowerCase()}
                      className="group border-l border-l-dark pl-4 hover:border-l-accent"
                    >
                      <NavbarLink
                        href={link.href}
                        title={link.title}
                        onClick={closeMenu}
                      />
                    </li>
                  ))}
                </ul>
              )}
              {openPartners && item.title.toLowerCase() === 'partners' && (
                <ul className="ml-5 flex flex-col gap-5 md:flex-wrap">
                  {item.links.map(link => (
                    <li
                      key={link.title.toLowerCase()}
                      className="group border-l border-l-dark pl-4 duration-300 hover:border-l-accent focus:text-accent"
                    >
                      <NavbarLink
                        href={link.href}
                        title={link.title}
                        onClick={closeMenu}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <NavbarLink
              key={item.title.toLowerCase()}
              href={item.href}
              title={item.title}
              onClick={closeMenu}
            />
          );
        })}
      {!isMobile &&
        menuItems.map((item: NavbarLinkProps) => {
          return item.links ? (
            <div key={item.title.toLowerCase()} className="md:flex md:flex-col">
              <button
                type="button"
                className={clsx(
                  'py-[6px] text-sm font-medium hover:text-accent focus:text-accent',
                  item.links.some(
                    (element: { title: string; href: string }) =>
                      element.href === pathname,
                  ) &&
                    'after:mx-auto after:mt-1 after:block after:h-1 after:w-1 after:rounded-full after:bg-current after:hover:bg-accent after:focus:bg-accent',
                )}
                onClick={() => handleOpenLink(item.title.toLowerCase())}
              >
                {item.title}
              </button>

              {openPartners && item.title.toLowerCase() === 'partners' && (
                <div className="hidden md:absolute md:left-0 md:right-0 md:top-[99%] md:z-50 md:block md:animate-open  md:bg-white md:duration-300">
                  <ul className="hidden md:mx-auto md:grid md:w-full md:max-w-[620px] md:grid-cols-2 md:gap-7 md:pb-12 md:pt-2 xl:max-w-[430px]">
                    {item.links.map(link => (
                      <li
                        key={link.title.toLowerCase()}
                        className="group border-l border-l-dark pl-4 hover:border-l-accent"
                      >
                        <NavbarLink
                          href={link.href}
                          title={link.title}
                          onClick={() => setOpenPartners(false)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {openSolution && item.title.toLowerCase() === 'solutions' && (
                <div className="hidden md:absolute md:left-0 md:right-0 md:top-[99%] md:z-50 md:block md:animate-open  md:bg-white md:duration-300">
                  <ul className="hidden md:mx-auto md:grid md:w-full md:max-w-[620px] md:grid-cols-2 md:gap-7 md:pb-12 md:pt-2 xl:max-w-[485px]">
                    {item.links.map(link => (
                      <li
                        key={link.title.toLowerCase()}
                        className="group border-l border-l-dark pl-4 hover:border-l-accent"
                      >
                        <NavbarLink
                          href={link.href}
                          title={link.title}
                          onClick={() => setOpenSolution(false)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <NavbarLink
              key={item.title.toLowerCase()}
              href={item.href}
              title={item.title}
              onClick={handleCloseAll}
              currentPath={pathname}
            />
          );
        })}
    </nav>
  );
};
