import React, { FC } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from '../Button';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  title: string;
  message: string;
};

export const Modal: FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  setIsSuccess,
  title,
  message,
}) => {
  const handleClick = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-[90%] rounded-sm bg-white p-8 text-dark md:max-w-[440px]">
          <Dialog.Title className="mb-5 text-sm font-semibold md:text-18/28">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-5 text-xs md:text-sm">
            {message}
          </Dialog.Description>
          <Button onClick={handleClick} className="btn">
            Done
          </Button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
