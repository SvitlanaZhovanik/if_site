import { NextPage } from 'next/types';

import about from '@/data/about.json';

const AboutPage: NextPage = () => {
  return (
    <section className="aboutBg h-full min-h-[calc(100vh-76px)] bg-white text-dark md:min-h-[calc(100vh-88px)]">
      <div className="container pt-10 md:pt-[60px] xl:pt-[200px] smOnly:pb-[240px] mdOnly:pb-[400px]">
        <h1 className="title mb-5 max-w-[199px] md:mb-8 md:max-w-[277px]">
          {about.title}
        </h1>
        <p className="max-w-[503px] text-sm font-normal">{about.description}</p>
      </div>
    </section>
  );
};
export default AboutPage;
