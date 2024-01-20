import { FC } from 'react';

type CareerContentProps = {
  item: {
    name: string;
    subtitle: string;
    responsibilities: {
      title: string;
      list: string[];
    };
    quality: {
      title: string;
      list: string[];
    };
    requirements: {
      title: string;
      list: string[];
    };
    text: string;
  };
};

export const CareerContent: FC<CareerContentProps> = ({ item }) => {
  return (
    <div className="mt-4 flex flex-col gap-4 text-sm">
      <p className=" font-medium">{item.responsibilities.title}</p>
      <ul className="list-inside">
        {item.responsibilities.list.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <p className="font-medium">{item.quality.title}</p>
      <ul className="list-inside ">
        {item.quality.list.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <p className="font-medium">{item.requirements.title}</p>
      <ul className="list-inside">
        {item.requirements.list.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <p className="text-sm font-normal">{item.text}</p>
    </div>
  );
};
