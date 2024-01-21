'use client';
import { FC, useState, useEffect } from 'react';
import { hasCookie, setCookie, deleteCookie } from 'cookies-next';
import { Dialog } from '@headlessui/react';
import { Button } from '../Button';

export const CookiesNotify: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hideConsent, setHideConsent] = useState(true);

  const acceptCookie = () => {
    setHideConsent(true);
    setCookie('localConsent', 'true');
    setIsOpen(false);
  };
  const deletedCookie = () => {
    setHideConsent(true);
    deleteCookie('localConsent');
    setIsOpen(false);
  };

  useEffect(() => {
    setHideConsent(hasCookie('localConsent'));
    setIsOpen(!hasCookie('localConsent'));
  }, []);

  return (
    !hideConsent && (
      <Dialog
        className="fixed inset-0 z-50 w-full  "
        open={isOpen}
        onClose={deletedCookie}
      >
        <div className=" fixed inset-0 " aria-hidden="true" />
        <Dialog.Panel className="absolute right-0 ml-auto max-w-[240px] rounded-sm bg-[#3A434D] text-white md:top-14 xl:top-8 smOnly:bottom-16 smOnly:left-0">
          <Dialog.Title className="mb-1 px-3 pt-3 text-xs font-medium">
            Cookies Consent
          </Dialog.Title>
          <Dialog.Description className="mb-5 px-3 text-xs font-light">
            This website uses cookies to ensure you get the best experience
          </Dialog.Description>
          <div className="flex justify-between">
            <Button
              onClick={acceptCookie}
              className="w-full bg-white text-dark"
            >
              Accept
            </Button>
            <Button
              onClick={deletedCookie}
              className="w-full bg-accent text-white"
            >
              Decline
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
    )
  );
};
