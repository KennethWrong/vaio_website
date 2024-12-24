import { useTranslations } from 'next-intl';

export default function Disclaimer() {
  const t = useTranslations('product.disclaimer');
  return (
    <div className=" bg-stone-100 text-gray-500 pt-6 w-full">
      <div className="ml-0 lg:ml-40 lg:w-2/3 w-full p-7 text-xs">
        <p className="mb-3">{t('intel')}</p>
        <p>{t('azumino_finish')}</p>
      </div>
    </div>
  );
}
