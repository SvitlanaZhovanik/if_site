'use client';

import React, { FC, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormPersist from 'react-hook-form-persist';
import ReactFlagsSelect from 'react-flags-select';
import Select from 'react-select';
import clsx from 'clsx';

import { Button } from '@/components/common/Button';
import { Modal } from '@/components/common/Modal';
import { Label } from './Label';
import { Input } from './Input';
import { ErrorMessage } from './ErrorMessage';
import { schema } from './constants';

import { countries } from '@/data/countries';
import { sendEmail } from '@/utils/sendMail';

import Spinner from '@/public/spinner.svg';

type Inputs = Record<string, object>;

export const Form: FC = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: '',
    label: 'Please select...',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const options = [
    { value: 'email', label: 'Email' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'forum', label: 'Forum' },
    { value: 'friends', label: 'Friends' },
    { value: 'social', label: 'Social Media' },
    { value: 'other', label: 'Other' },
  ];

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  useFormPersist('contactForm', {
    watch,
    setValue,
    exclude: ['country', 'about'],
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const countryName = Object.entries(countries).find(
      ([key]) => key === (data.country as unknown as string),
    )?.[1];
    try {
      setIsLoading(true);
      await sendEmail({
        ...data,
        country: countryName as string,
        about: (data.about as { label: string })?.label,
      });
      setIsModalOpen(true);
      setIsSuccess(true);
      sessionStorage.removeItem('contactForm');
      reset();
      setSelectedOption({ value: '', label: 'Please select...' });
    } catch {
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className="w-full max-w-[704px] xl:max-w-[636px] notXL:mx-auto notXL:pb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
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
              type="tel"
              error={errors.phone?.message}
              placeholder="+44(000)00000"
            />
          </Label>
          <div className="group relative text-left ">
            <label
              htmlFor="country"
              className="text-left group-hover:text-accent group-focus:text-accent"
            >
              Country*
            </label>
            <Controller
              name="country"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <ReactFlagsSelect
                    className={clsx(
                      'border-b  group-hover:border-accent group-focus:border-accent',
                      errors.country
                        ? 'border-b-rose-900'
                        : 'border-b-zinc-600',
                    )}
                    selectButtonClassName="!border-none font-sans !py-[3px]"
                    selected={value as unknown as string}
                    placeholder="Select Country"
                    searchable
                    onSelect={code => {
                      onChange(code);
                    }}
                  />
                );
              }}
            />
            {errors.country && (
              <ErrorMessage>{errors.country?.message}</ErrorMessage>
            )}
          </div>
          <Label labelText={'WhatsApp'} className="group text-left">
            <Input
              {...register('whatsapp')}
              error={errors.whatsapp?.message}
              placeholder="+44(000)00000"
            />
          </Label>
          <Label labelText={'Telegram'} className="group text-left">
            <Input
              {...register('telegram')}
              error={errors.telegram?.message}
              placeholder="@INTERACTIVEFUNDS"
            />
          </Label>
          <Label
            labelText={'How did you hear about us?'}
            className="group relative text-left"
          >
            <Controller
              name="about"
              control={control}
              render={({ field: { onChange } }) => {
                return (
                  <Select
                    value={selectedOption}
                    className="border-b border-b-zinc-600 pb-[2px] hover:border-accent focus:border-accent"
                    options={options}
                    styles={{
                      indicatorsContainer: () => ({
                        display: 'none',
                      }),
                      indicatorSeparator: () => ({
                        display: 'none',
                      }),
                      valueContainer: base => ({
                        ...base,
                        padding: 0,
                        height: '100%',
                      }),
                      control: base => ({
                        ...base,
                        border: 'none',
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                      }),
                      option: base => ({
                        ...base,
                        border: 'none',
                        borderBottom: '1px solid #52525b',
                        height: '100%',
                      }),
                    }}
                    theme={theme => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: '#a1a1aa',
                        primary: '#DC2626',
                      },
                    })}
                    onChange={options => {
                      onChange(options), options && setSelectedOption(options);
                    }}
                  />
                );
              }}
            />
            {errors.about?.message && (
              <ErrorMessage>{errors.about?.message}</ErrorMessage>
            )}
          </Label>
          {selectedOption?.value === 'other' && (
            <Label labelText={'Message'} className="group text-left ">
              <Input {...register('message')} placeholder="Your message" />
            </Label>
          )}
        </div>
        <Button className="btn" type="submit">
          {isLoading ? (
            <>
              <Spinner
                wight={24}
                height={24}
                className="-ml-1 mr-3 h-6 w-6 animate-spin text-white duration-300"
              />
              <span className="block animate-pulse">Sending...</span>
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </form>
      {isModalOpen && isSuccess ? (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          setIsSuccess={setIsSuccess}
          title="Thank you for reaching out to us! "
          message="Your message is important to us, and we appreciate the opportunity to assist you. Our team is currently reviewing your message and will respond shortly."
        />
      ) : (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          setIsSuccess={setIsSuccess}
          title="Something went wrong"
          message="Please try again later"
        />
      )}
    </>
  );
};
