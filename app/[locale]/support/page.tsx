'use server';

import { getTranslations } from 'next-intl/server';
import {
  FaClock,
  FaEnvelope,
  FaMap,
  FaPhone,
  FaRocketchat,
} from 'react-icons/fa';
import SupportRedirect from '@/components/SupportRedirect';

export default async function Page() {
  const t = await getTranslations('support');

  return (
    <main className="flex flex-col flex-grow">
      <SupportRedirect />
      <div
        className="py-16 w-full flex flex-row bg-cover bg-center lg:h-40vh sm:h-auto"
        style={{ backgroundImage: `url('${t('image_support_banner')}')` }}
      >
        <div className="lg:w-1/2 w-full flex flex-row items-center justify-center content-center pl-3 lg:pl-0">
          <div className="flex flex-col lg:w-1/2 w-full gap-y-10 items-center lg:items-start">
            <h1 className=" text-6xl bg-white lg:bg-transparent">
              {t('support_header')}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:h-40vh h-auto mt-10 pl-3 lg:pl-0">
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
              {t('line').length >= 1 ? (
                <div className="flex flex-row items-center">
                  <FaRocketchat className="h-5 w-5" />
                  <span className="ml-3">{t('line')}</span>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        id="support-warranty"
        className="flex flex-col w-full flex-grow items-center mb-15 mt-10 lg:mt-0"
      >
        <h1 className="text-5xl text-center">{t('warranty')}</h1>
        <div className="flex flex-col pl-4 mt-6 items-center">
          <h1 className="mb-3 font-bold">{t('warranty_subheader_1')}</h1>
          <ol className="list-inside text-gray-600 space-y-4 list-decimal leading-loose w-3/4">
            <li>{t('warranty_text_1')}</li>
            <li>{t('warranty_text_2')}</li>
            <li>{t('warranty_text_3')}</li>
            <li>{t('warranty_text_4')}</li>
            <li>{t('warranty_text_5')}</li>
            <li>{t('warranty_text_6')}</li>
            <li>{t('warranty_text_7')}</li>
            <li>{t('warranty_text_8')}</li>
            <li>{t('warranty_text_9')}</li>
            <li>{t('warranty_text_10')}</li>
            <ol type="i" className=" ml-10">
              <li>i. {t('warranty_text_10_i')}</li>
              <li>ii. {t('warranty_text_10_ii')}</li>
              <li>iii. {t('warranty_text_10_iii')}</li>
            </ol>
            <li>{t('warranty_text_11')}</li>
            <li>{t('warranty_text_12')}</li>
            <li>{t('warranty_text_13')}</li>
            <li>{t('warranty_text_14')}</li>
            <li>{t('warranty_text_15')}</li>
            <li>{t('warranty_text_16')}</li>
          </ol>
        </div>
        <div className="flex flex-col pl-4 mt-10 items-center py-5 px-3">
          <h1 className="mb-3 font-bold text-xl">
            {t('linked_warranty_plan')}
          </h1>
          <h1 className="mb-3 italic w-3/4 lg:w-full">
            {t('linked_warranty_regions')}
          </h1>
          <ol className="list-inside text-gray-600 space-y-4 list-decimal leading-loose w-3/4">
            <li>{t('linked_warranty_1')}</li>
            <li>{t('linked_warranty_2')}</li>
            <li>{t('linked_warranty_3')}</li>
            <li>{t('linked_warranty_4')}</li>
            <li>{t('linked_warranty_5')}</li>
            <li>{t('linked_warranty_6')}</li>
          </ol>
        </div>
      </div>
      <div className=" bg-gray-200 mt-10 py-10 w-full items-center flex flex-col">
        <ol className="list-inside text-gray-600 space-y-4 list-disc leading-loose w-3/4">
          <li>{t('disclaimer_1')}</li>
          <li>{t('disclaimer_2')}</li>
          <li>{t('disclaimer_3')}</li>
        </ol>
      </div>
    </main>
  );
}
