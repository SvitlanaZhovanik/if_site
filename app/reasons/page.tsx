import { NextPage } from 'next/types';

import { AccordionDefault } from '@/components/common/Accordion';
import { FormModal } from '@/components/common/FormModal';

import reasons from '@/data/reasons.json';

const ReasonsPage: NextPage = () => {
  return (
    <section className="reasonsBg h-full min-h-[calc(100vh-76px)] text-white md:min-h-[calc(100vh-88px)]">
      <div className="container pt-[54px] md:pt-[75px] xl:pt-[104px] smOnly:pb-[363px]">
        <h1 className="title mb-5 md:mb-8 md:max-w-[640px] xl:max-w-[599px]">
          {reasons.title}
        </h1>
        <FormModal text={reasons.btn} />
        <AccordionDefault
          data={reasons.items}
          className="max-w-[360px] md:mb-[110px] xl:mb-[130px] xl:max-w-[500px]"
        />
        <div className="hidden md:block md:max-w-[336px] md:pb-5 xl:max-w-[564px]">
          <h2 className="mb-4 text-sm font-medium">{reasons.subtitle}</h2>
          <p className="text-xs font-light ">{reasons.description}</p>
        </div>
      </div>
    </section>
  );
};
export default ReasonsPage;
