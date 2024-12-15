import { useTranslations } from 'next-intl';
import { FaClock, FaEnvelope, FaMap, FaPhone } from 'react-icons/fa';

const Page = () => {
  const t = useTranslations('contact_us');
  return (
    <main className="flex flex-col flex-grow">
      <div
        className="py-16 w-full flex flex-row bg-cover bg-center h-40vh"
        style={{ backgroundImage: `url('${t('image_contact_us_banner')}')` }}
      >
        <div className="w-1/2 flex flex-row items-center justify-center content-center pl-3 lg:pl-0">
          <div className="flex flex-col w-1/2 gap-y-10">
            <h1 className=" text-6xl">{t('contact_us_title')}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-10 pl-3 lg:pl-0">
        <div
          id="support-center"
          className="flex flex-col w-full items-center justify-center content-center"
        >
          <h1 className="text-5xl">{t('service_center')}</h1>
          <div className="flex flex-col mt-12">
            <h1 className="text-xl">{t('customer_service')}</h1>
            <div className="flex flex-col ml-3 text-gray-500">
              <div className="flex flex-row items-center">
                <FaMap className="h-5 w-5" />
                <span className="ml-3">{t('location')}</span>
              </div>
              <div className="flex flex-row items-center">
                <FaClock className="h-5 w-5" />
                <span className="ml-3">{t('time')}</span>
              </div>
              <div className="flex flex-row items-center">
                <FaPhone className="h-5 w-5" />
                <span className="ml-3">{t('phone_number')}</span>
              </div>
              <div className="flex flex-row items-center">
                <FaEnvelope className="h-5 w-5" />
                <span className="ml-3">{t('email')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center content-center mt-16 flex-grow">
          <div className="flex flex-col items-center w-1/2 h-auto">
            <h1 className="text-5xl mb-5">{t('general_inquiry_title')}</h1>
            <img src={t('image_email_icon')} className="h-20 w-30"></img>
            <h2 className="mt-3 text-gray-500">
              {t('general_inquiry_subtitle')}
            </h2>
            <h2 className="mt-1 text-gray-500">{t('general_inquiry_email')}</h2>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center content-center mt-5 flex-grow py-10 h-40vh">
          <div className="flex flex-col items-center w-1/2 h-auto">
            <h1 className="text-5xl mb-5">{t('sales_inquiry_title')}</h1>
            <h1 className="text-2xl mb-5">{t('sales_inquiry_times')}</h1>
            <img src={t('image_email_icon')} className="h-20 w-30"></img>
            <h2 className="mt-3 text-gray-500">
              {t('sales_inquiry_subtitle')}
            </h2>
            <h2 className="mt-1 text-gray-500">{t('sales_inquiry_email')}</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
