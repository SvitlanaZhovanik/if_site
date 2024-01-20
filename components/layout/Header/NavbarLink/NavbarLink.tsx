import React, { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export interface NavbarLinkProps {
  title: string;
  href?: string;
  links?: { title: string; href: string }[];
  onClick?: () => void;
  currentPath?: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  title,
  href,
  onClick,
  currentPath,
}) => {
  return (
    <Link
      href={href || ''}
      className={clsx(
        'py-[6px] text-sm font-medium duration-300 hover:text-accent focus:text-accent group-hover:text-accent group-focus:text-accent',
        href === currentPath &&
          'after:mx-auto after:mt-1 after:block after:h-1 after:w-1 after:rounded-full after:bg-current after:hover:bg-accent after:focus:bg-accent',
      )}
      onClick={() => onClick && onClick()}
    >
      {title}
    </Link>
  );
};
