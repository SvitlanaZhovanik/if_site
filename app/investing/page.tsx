import { NextPage } from 'next/types';

import investing from '@/data/investing.json';

const InvestingPage: NextPage = () => {
  return (
    <section className="investingBg h-full min-h-[calc(100vh-76px)] text-white md:min-h-[calc(100vh-88px)] ">
      <div className="container pt-10 md:pt-[60px] xl:pt-[200px] smOnly:pb-[260px] mdOnly:pb-[430px]">
        <h1 className="title mb-5 md:mb-8">{investing.title}</h1>
        <p className="mb-5 max-w-[600px] text-sm font-normal xl:max-w-[400px]">
          {investing.description}
        </p>
        <p className="max-w-[600px] text-sm font-normal xl:max-w-[400px]">
          {investing.text}
        </p>
      </div>
    </section>
  );
};
export default InvestingPage;
