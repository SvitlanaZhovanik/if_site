import * as zod from 'zod';

export const schema = zod.object({
  name: zod
    .string()
    .min(2, { message: 'Must be 2 or more characters long' })
    .trim(),
  email: zod.string().email({ message: 'Please enter a valid email address.' }),
  phone: zod
    .string()
    .min(10, { message: 'Please enter a valid phone number.' })
    .regex(/^\+\d{1,18}$/, {
      message: 'Please enter a valid phone number .',
    }),
  country: zod.string().min(1, { message: 'Please select a country.' }),
  telegram: zod.string(),
  whatsapp: zod.string(),
  about: zod.object({
    value: zod.string(),
    label: zod.string(),
  }),
  message: zod.string(),
});
