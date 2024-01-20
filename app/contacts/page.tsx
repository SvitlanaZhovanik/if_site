import { NextPage } from 'next/types';

import { Form } from '@/components/common/Form';

import contacts from '@/data/contacts.json';

import Telegram from '@/public/telegram.svg';
import Mail from '@/public/mail.svg';

const ContactsPage: NextPage = () => {
  return (
    <section className="h-full min-h-[calc(100vh-76px)] bg-white text-dark md:min-h-[calc(100vh-88px)]">
      <div className="container pt-10 md:pt-[60px] xl:flex xl:flex-row-reverse xl:justify-between xl:pt-20">
        <div>
          <h1 className="title mb-5 md:mb-8">{contacts.title}</h1>
          <p className="mb-8 text-xs md:max-w-[458px]">
            {contacts.description}
          </p>
          <div className="mb-[60px] flex flex-col gap-7">
            <a
              href={contacts.telegram.url}
              className="group flex items-center gap-2 text-sm duration-300 hover:text-accent focus:text-accent"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Telegram className="h-4 w-4 fill-dark duration-300 group-hover:fill-accent group-focus:fill-accent" />
              {contacts.telegram.label}
            </a>
            <a
              href={contacts.email.url}
              className="group flex items-center gap-2 text-sm duration-300 hover:text-accent focus:text-accent"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Mail className="h-4 w-4 fill-dark duration-300 group-hover:fill-accent group-focus:fill-accent" />
              {contacts.email.label}
            </a>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};
export default ContactsPage;
