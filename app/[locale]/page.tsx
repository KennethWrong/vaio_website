import CarouselBanner from '@/components/homepage/CarouselBanner';
import { ContactUs } from '@/components/homepage/ContactUs';
import YoutubeSection from '@/components/homepage/YoutubeSection';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('homepage');

  const images = [
    {
      s: t('image_carousell_1_s'),
      m: t('image_carousell_1_l'),
    },

    {
      s: t('image_carousell_2_s'),
      m: t('image_carousell_2_l'),
    },
    {
      s: t('image_carousell_3_s'),
      m: t('image_carousell_3_l'),
    },
    {
      s: t('image_carousell_4_s'),
      m: t('image_carousell_4_l'),
    },
    {
      s: t('image_carousell_5_s'),
      m: t('image_carousell_5_l'),
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center w-screen">
      <CarouselBanner images={images} />
      <YoutubeSection />
      <ContactUs />
    </main>
  );
}
