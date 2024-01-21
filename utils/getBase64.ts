export const getBase64 = (string_: string) =>
  typeof window === 'undefined'
    ? Buffer.from(string_).toString('base64')
    : window.btoa(string_);
