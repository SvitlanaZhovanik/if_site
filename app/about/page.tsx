import { NextPage } from 'next/types';

import about from '@/data/about.json';

const AboutPage: NextPage = () => {
  return (
    <section className="aboutBg h-full min-h-[calc(100vh-76px)] bg-white text-dark md:min-h-[calc(100vh-88px)]">
      <div className="container pt-10 md:pt-[60px] xl:pt-[200px] smOnly:pb-[240px] mdOnly:pb-[400px]">
        <h1 className="title mb-5 max-w-[199px] md:mb-8 md:max-w-[277px] xl:max-w-[465px] xl:text-[32px] xl:leading-[40px]">
          {about.title}
        </h1>
        <p className="max-w-[596px] text-sm font-normal xl:text-20/28">
          {about.description}
        </p>
      </div>
    </section>
  );
};
export default AboutPage;
