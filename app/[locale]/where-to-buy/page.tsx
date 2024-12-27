import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('where_to_buy');
  return (
    <main>
      <div className="flex flex-col w-full items-center justify-center content-center mt-5 flex-grow py-10 lg:h-40vh h-auto">
        <div className="flex flex-col items-center w-1/2 h-auto">
          <h1 className="text-5xl mb-5">{t('sales_enquiry_title')}</h1>
          <h1 className="text-2xl mb-5">{t('operation_hours')}</h1>
          <img src={t('image_email_icon')} className="h-20 w-30"></img>
          <h2 className="mt-3 text-gray-500">{t('email_title')}</h2>
          <h2 className="mt-1 text-gray-500">{t('email')}</h2>
        </div>
      </div>
    </main>
  );
}
