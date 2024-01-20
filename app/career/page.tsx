'use client';

import { NextPage } from 'next/types';
import * as Accordion from '@radix-ui/react-accordion';

import career from '@/data/career.json';
import Chevron from '@/public/chevron.svg';
import { CareerContent } from '@/components/common/CareerContent';

const CareerPage: NextPage = () => {
  return (
    <section className="h-full min-h-[calc(100vh-76px)] text-white md:min-h-[calc(100vh-88px)]">
      <div className="container pt-10 md:pt-[60px] xl:pt-[104px]">
        <h1 className="title mb-8">{career.title}</h1>
        <Accordion.Root
          type="single"
          collapsible
          className="flex flex-col gap-8 xl:mx-auto xl:max-w-[1076px]"
        >
          {career.list.map((item, index) => (
            <Accordion.Item
              key={index}
              value={`${index}`}
              className="border-b border-b-zinc-600 pb-5"
            >
              <Accordion.Header asChild>
                <>
                  <Accordion.Trigger className="h group mb-5 flex w-full items-center justify-between hover:text-accent  focus:text-accent">
                    <span className="text-18/28 font-semibold">
                      {item.name}
                    </span>
                    <Chevron className="block h-7 w-7 fill-white transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-hover:fill-accent group-focus:fill-accent group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <p className="text-sm xl:max-w-[788px] ">{item.subtitle}</p>
                </>
              </Accordion.Header>
              <Accordion.Content className=" overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                <CareerContent item={item} />
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};
export default CareerPage;
