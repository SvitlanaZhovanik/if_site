import * as zod from 'zod';

export const schema = zod.object({
  name: zod
    .string()
    .min(3, { message: 'Must be 3 or more characters long' })
    .trim(),
  email: zod.string().email({ message: 'Please enter a valid email address.' }),
  phone: zod
    .string()
    .min(10, { message: 'Please enter a valid phone number.' })
    .regex(/^\+\d{1,18}$/, {
      message: 'Please enter a valid phone number .',
    }),
  telegram: zod.string(),
  whatsapp: zod.string(),
});
