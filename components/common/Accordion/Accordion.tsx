'use client';

import { FC } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

import clsx from 'clsx';

interface AccordionProps {
  data: {
    title: string;
    text: string;
  }[];
  className?: string;
  dark?: boolean;
}

export const AccordionDefault: FC<AccordionProps> = ({
  data,
  className,
  dark,
}) => {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={clsx('grid gap-6 ', className)}
    >
      {data.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`${index}`}
          className={clsx(
            'group border-l pl-5 duration-300 hover:border-l-accent focus:border-l-accent xl:data-[state=open]:row-span-2',
            dark ? 'border-l-dark' : 'border-l-white',
          )}
        >
          <Accordion.Trigger className="w-full text-start duration-300  group-hover:text-accent group-focus:text-accent">
            <span className="text-sm font-medium">{item.title}</span>
          </Accordion.Trigger>
          <Accordion.Content className="mt-3 overflow-hidden text-xs font-light data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            {item.text}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
