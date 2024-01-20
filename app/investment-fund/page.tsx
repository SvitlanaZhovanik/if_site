import { NextPage } from 'next/types';

import { AccordionDefault } from '@/components/common/Accordion';
import { FormModal } from '@/components/common/FormModal';

import investment from '@/data/investment.json';

const InvestmentPage: NextPage = () => {
  return (
    <section className="investmentBg h-full min-h-[calc(100vh-76px)] bg-white text-dark md:min-h-[calc(100vh-88px)]">
      <div className="container pt-10 md:pt-[60px] xl:pt-20 smOnly:pb-[259px] mdOnly:pb-[200px]">
        <h1 className="title mb-5 md:mb-8">{investment.title}</h1>
        <p className="mb-5 text-sm font-normal xl:max-w-[770px]">
          {investment.description}
        </p>
        <p className="mb-10 text-sm font-normal xl:max-w-[770px]">
          {investment.text}
        </p>
        <FormModal text={investment.btn} />
        <AccordionDefault
          data={investment.items}
          dark
          className="md:max-w-[350px] xl:max-w-[750px]"
        />
      </div>
    </section>
  );
};
export default InvestmentPage;
