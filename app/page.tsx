import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next/types';

import home from '@/data/home.json';

import Telegram from '@/public/telegram.svg';

const Page: NextPage = () => {
  return (
    <section className="relative flex h-full flex-col text-white md:overflow-hidden portrait:overflow-hidden portrait:sm:min-h-[calc(100vh-76px)] portrait:notXL:min-h-[calc(100vh-88px)] landscape:md:min-h-[calc(100vh-88px)] landscape:smOnly:pb-[200px] landscape:mdOnly:pb-[400px]">
      <div className="container flex-grow pt-[calc(50%-25%)] md:pt-[80px]">
        <h1 className="mx-auto mb-7 max-w-[692px] text-center text-20/28 font-semibold md:mb-10 md:text-3xl">
          {home.title}
        </h1>
        <p className="mx-auto mb-7 max-w-[478px] text-center text-xs font-semibold text-white-light md:mb-10 md:text-20/28">
          {home.subtitle}
        </p>
        <a
          href={home.link.href}
          className="group flex items-center justify-center gap-2 text-sm font-medium landscape:smOnly:mb-10"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {home.link.text}{' '}
          <Telegram className="h-4 w-4 fill-white duration-300 group-hover:fill-accent group-focus:fill-accent" />
        </a>
      </div>
      <Image
        className="-bottom-[20px] left-0 right-0 sm:-bottom-[40px] sm:left-[calc(50%-240px)] sm:max-w-[480px] md:absolute md:-bottom-[60px] md:left-[calc(50%-352px)] md:max-w-[704px] xl:-bottom-[80px] xl:left-[calc(50%-428px)] xl:max-w-[856px] portrait:notXL:absolute landscape:smOnly:mx-auto"
        src="https://svsfvdsg.b-cdn.net/home.gif"
        alt={home.image.alt}
        width={856}
        height={483}
        priority
      />
    </section>
  );
};

export default Page;
