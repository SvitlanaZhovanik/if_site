import Image from 'next/image';
import { AccordionDefault } from '@/components/common/Accordion';
import partners from '@/data/partners.json';
import clsx from 'clsx';

import resellerMob from '@/public/images/partners/reseller_mob.webp';
import resellerTab from '@/public/images/partners/reseller_tab.webp';

// eslint-disable-next-line unicorn/prevent-abbreviations
export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

// eslint-disable-next-line react-refresh/only-export-components, unicorn/prevent-abbreviations
export async function generateStaticParams() {
  const slugs = ['reseller', 'voip', 'psp', 'orm'];
  const staticParameters = slugs.map(slug => {
    return { slug };
  });

  return staticParameters;
}

export default async function PartnersPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = partners.data.find(object => object.id === slug);
  return (
    <section className=" relative h-full min-h-[calc(100vh-76px)] overflow-hidden text-white md:min-h-[calc(100vh-88px)] ">
      <div
        className={clsx(
          data?.id === 'reseller' ? 'pb-5' : 'smOnly:pb-[240px]',
          'container pt-10 md:pb-5 md:pt-[60px] xl:pb-7 xl:pt-[104px]',
        )}
      >
        <h1 className="title mb-5 md:mb-8">{data?.title}</h1>
        <p className="mb-10 max-w-[640px] text-sm font-normal xl:max-w-[960px]">
          {data?.description}
        </p>
        <h2 className="mb-10 text-sm font-medium">{data?.subtitle}</h2>

        {data?.items && (
          <AccordionDefault
            data={data.items}
            className={clsx(
              data.id === 'reseller'
                ? 'mb-10 md:mb-[86px] md:max-w-[386px] xl:max-w-[800px]'
                : 'mb-10 md:mb-[100px] md:max-w-[336px] xl:max-w-[960px] xl:grid-cols-2',
            )}
          />
        )}

        {data?.text && (
          <div
            className="text-xs font-light xl:max-w-[723px]"
            dangerouslySetInnerHTML={{ __html: data?.text }}
          />
        )}
        {data?.image && (
          <Image
            src={data?.image.src}
            alt={data?.image.alt}
            width={data?.image.width}
            height={data?.image.height}
            priority
            className="absolute -bottom-3 right-0 h-[230px] w-[230px] md:bottom-[30%] md:h-[300px] md:w-[300px] xl:-bottom-6 xl:h-[500px] xl:w-auto"
          />
        )}
        {data?.id === 'reseller' && (
          <div>
            <Image
              src={resellerMob}
              alt="flowchart of the cooperation process"
              width={resellerMob.width}
              height={resellerMob.height}
              className="mt-7 md:hidden"
              priority
            />
            <Image
              src={resellerTab}
              alt="flowchart of the cooperation process"
              width={resellerTab.width}
              height={resellerTab.height}
              className="hidden md:mt-10 md:block"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
