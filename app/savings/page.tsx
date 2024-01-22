import { NextPage } from 'next/types';

import savings from '@/data/savings.json';

const SavingsPage: NextPage = () => {
  return (
    <section className="savingsBg h-full min-h-[calc(100vh-76px)] text-white md:min-h-[calc(100vh-88px)]">
      <div className="container pt-10 md:pt-[60px] xl:pt-[200px] smOnly:pb-[220px] mdOnly:pb-[400px]">
        <h1 className="title mb-5 md:mb-8">{savings.title}</h1>
        <p className="max-w-[600px] text-sm font-normal xl:max-w-[35%]">
          {savings.description}
        </p>
      </div>
    </section>
  );
};
export default SavingsPage;
