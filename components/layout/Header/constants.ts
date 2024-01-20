import { NavbarLinkProps } from './NavbarLink';

export const menuItems: NavbarLinkProps[] = [
  {
    title: 'About us',
    href: '/about',
  },
  {
    title: 'Solutions',
    links: [
      {
        title: 'Reasons why us',
        href: '/reasons',
      },
      {
        title: 'What is an investment fund',
        href: '/investment-fund',
      },
      {
        title: 'Savings account',
        href: '/savings',
      },
      {
        title: 'Investing account',
        href: '/investing',
      },
    ],
  },
  {
    title: 'Partners',
    links: [
      {
        title: 'Reseller',
        href: '/reseller',
      },
      {
        title: 'VOIP',
        href: '/voip',
      },
      {
        title: 'PSP',
        href: '/psp',
      },
      {
        title: 'ORM',
        href: '/orm',
      },
    ],
  },
  {
    title: 'Career',
    href: '/career',
  },
  {
    title: 'Contacts',
    href: '/contacts',
  },
];
