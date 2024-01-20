export type ContactFormInputs = {
  [key: string]: string | object;
};

export const sendEmail = async (data: ContactFormInputs) => {
  const apiEndpoint = '/api/email';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Couldn't send email");

  return response.json();
};
