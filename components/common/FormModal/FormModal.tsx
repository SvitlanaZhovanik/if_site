'use client';
import { FC, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/common/Button';
import { Label } from '../Form/Label';
import { Input } from '../Form/Input';

import { schema } from './constants';
import { sendEmail } from '@/utils/sendMail';

import Arrow from '@/public/arrow.svg';
import Close from '@/public/close.svg';
import Spinner from '@/public/spinner.svg';

interface FormModalProps {
  text: string;
}
type Inputs = {
  name: string | object;
  email: string | object;
  phone: string | object;
  whatsapp: string | object;
  telegram: string | object;
};

export const FormModal: FC<FormModalProps> = ({ text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  useFormPersist('modalForm', {
    watch,
    setValue,
  });

  const handleClose = () => {
    setIsModalOpen(false);
    setIsSending(false);
    setIsSuccess(false);
    setIsLoading(false);
  };

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      setIsLoading(true);
      await sendEmail({ ...data, message: 'Request demo' });
      reset();
      setIsSuccess(true);
      setIsSending(true);
      setIsLoading(false);
      sessionStorage.removeItem('modalForm');
    } catch {
      setIsSending(true);
      setIsSuccess(false);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        type="button"
        className="mb-10 gap-2 duration-300 hover:text-accent focus:text-accent md:mb-[60px]"
        onClick={() => setIsModalOpen(true)}
      >
        {text}
        <Arrow
          width={18}
          height={18}
          className="inline-block h-[18px] w-[18px] "
        />
      </Button>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="relative mx-auto w-full max-w-[450px] rounded-sm bg-white px-5 py-8 text-dark md:max-w-[704px] xl:max-w-[760px]">
            {isSending ? (
              <>
                <Dialog.Title className="mb-5 text-center text-sm font-semibold md:text-18/28">
                  {isSuccess
                    ? 'Thank you for your request!'
                    : 'Something went wrong.'}
                </Dialog.Title>
                <Dialog.Description className="mb-5 text-center text-xs md:text-sm">
                  {isSuccess
                    ? 'We will contact you soon.'
                    : 'Please try again later.'}
                </Dialog.Description>
                <div className="flex justify-center">
                  <Button onClick={handleClose} className="btn">
                    Done
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Dialog.Title className="mb-5 text-sm font-semibold md:mb-8 md:text-18/28">
                  Leave a request for our demo
                </Dialog.Title>
                <Dialog.Description className="mb-5 text-xs md:text-sm">
                  <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                      <Label labelText={'Name*'} className="group text-left">
                        <Input
                          {...register('name')}
                          error={errors.name?.message}
                          placeholder="John Smith"
                        />
                      </Label>

                      <Label labelText={'Email*'} className="group text-left">
                        <Input
                          {...register('email')}
                          error={errors.email?.message}
                          placeholder="admin@interactivefunds.com"
                        />
                      </Label>

                      <Label labelText={'Phone*'} className="group text-left ">
                        <Input
                          {...register('phone')}
                          error={errors.phone?.message}
                          placeholder="+44 (000) 00000"
                        />
                      </Label>

                      <Label labelText={'WhatsApp'} className="group text-left">
                        <Input
                          {...register('whatsapp')}
                          error={errors.whatsapp?.message}
                          placeholder="+44 (000) 00000"
                        />
                      </Label>
                      <Label labelText={'Telegram'} className="group text-left">
                        <Input
                          {...register('telegram')}
                          error={errors.telegram?.message}
                          placeholder="@INTERACTIVEFUNDS"
                        />
                      </Label>
                    </div>
                    <div className="flex justify-end">
                      <Button className="btn" type="submit">
                        {isLoading ? (
                          <>
                            <Spinner
                              wight={24}
                              height={24}
                              className="-ml-1 mr-3 h-6 w-6 animate-spin text-white duration-300"
                            />
                            <span className="block animate-pulse">
                              Sending...
                            </span>
                          </>
                        ) : (
                          'Request demo'
                        )}
                      </Button>
                    </div>
                  </form>
                </Dialog.Description>
              </>
            )}
            <Button
              className="group absolute right-3 top-3 md:right-5 md:top-5"
              aria-label="Button close Modal"
              onClick={() => setIsModalOpen(false)}
            >
              <Close
                width={28}
                height={28}
                className="h-5 w-5 fill-dark group-hover:fill-accent group-focus:fill-accent md:h-7 md:w-7"
              />
            </Button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
