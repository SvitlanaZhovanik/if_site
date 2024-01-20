import { Html } from '@react-email/html';
import { Text } from '@react-email/components';

type ContactFormRequest = {
  email: string;
  message: string;
  name: string;
  about: string;
  country: string;
  phone: string;
  telegram: string;
  whatsapp: string;
};

export function Email(props: ContactFormRequest) {
  const { email, message, name, about, country, phone, telegram, whatsapp } =
    props;

  return (
    <Html lang="en">
      <div>
        <Text>
          <b>Name</b>
          <br />
          <span>{name}</span>
        </Text>

        <Text>
          <b>Email</b>
          <br />
          <span>{email}</span>
        </Text>

        <Text>
          <b>Phone</b>
          <br />
          <span>{phone}</span>
        </Text>

        {about && (
          <Text>
            <b>About</b>
            <br />
            <span>{about}</span>
          </Text>
        )}

        {country && (
          <Text>
            <b>Country</b>
            <br />
            <span>{country}</span>
          </Text>
        )}
        {telegram && (
          <Text>
            <b>Telegram</b>
            <br />
            <span>{telegram}</span>
          </Text>
        )}
        {whatsapp && (
          <Text>
            <b>WhatsApp</b>
            <br />
            <span>{whatsapp}</span>
          </Text>
        )}

        {message && (
          <Text>
            <b>Message</b>
            <br />
            <span>{message}</span>
          </Text>
        )}
      </div>
    </Html>
  );
}
