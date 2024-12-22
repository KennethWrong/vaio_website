import CarouselBanner from '@/components/homepage/CarouselBanner';
import ProductBanner from '@/components/ProductBanner';
import Tag from '@/components/s11/Tag';
import TextImageRow from '@/components/s11/TextImageRow';
import Disclaimer from '@/components/se2021/disclaimer';
import HeaderImageBlock from '@/components/se2021/HeaderImageBlock';
import HeaderSubtitleBlock from '@/components/sx12/HeaderSubTitleBlock';
import ThreeBoxes from '@/components/sx12/ThreeBoxes';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('product.sx12');

  const carouselImages = [
    {
      s: t('image_sx12_carousel_1_sm'),
      m: t('image_sx12_carousel_1_lg'),
    },
    {
      s: t('image_sx12_carousel_2_sm'),
      m: t('image_sx12_carousel_2_lg'),
    },
    {
      s: t('image_sx12_carousel_3_sm'),
      m: t('image_sx12_carousel_3_lg'),
    },
    {
      s: t('image_sx12_carousel_4_sm'),
      m: t('image_sx12_carousel_4_lg'),
    },
  ];

  return (
    <div className="text-gray-500">
      <ProductBanner
        mobileImage={t('image_sx12_banner_sm')}
        desktopImage={t('image_sx12_banner_lg')}
        altText="sx12 banner"
      />
      <CarouselBanner images={carouselImages} />
      <div className="mb-16"></div>
      <HeaderImageBlock
        titleColour="text-black"
        imageSrc={t('image_sx12_new_concept')}
        title={t('new_concept_header_1')}
        titleSize="text-5xl"
      />
      <div className="my-16"></div>
      <HeaderImageBlock
        titleColour="text-black"
        imageSrc={t('image_sx12_right_connection')}
        title={t('right_connection_header_1')}
        titleSize="text-5xl"
      />
      <ThreeBoxes
        boxes={[t('box_text_1'), t('box_text_2'), t('box_text_3')]}
        index={0}
      />
      <HeaderImageBlock
        titleColour="text-black"
        imageSrc={t('image_sx12_899g')}
        topTag={t('box_text_1')}
        topText={[t('mobility_text_1'), t('mobility_text_2')]}
        topTextDisclaimer={t('mobility_disclaimer_1')}
        textCenter={true}
      />
      <div className="p-6 flex flex-col items-center">
        <div className="flex flex-col items-center w-5/6 text-center">
          <h1 className="text-5xl mb-8 text-black">
            {t('petite_size_header_1')}
          </h1>
          <p className="text-xl text-gray-500">{t('petite_size_text_1')}</p>
          <div className="flex flex-col lg:flex-row items-center">
            <img src={t('image_sx12_area_1')} className="w-1/2 h-auto"></img>
            <img src={t('image_sx12_area_2')} className="w-1/2 h-auto"></img>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col items-center">
        <div className="flex flex-col items-center w-5/6 justify-center">
          <h1 className="text-5xl mb-8 text-center text-black">
            {t('fast_charge_header_1')}
          </h1>
          <div className="flex flex-col lg:flex-row items-center text-gray-500">
            <div className="w-1/2">
              <img src={t('image_sx12_vaio_black')} />
            </div>
            <div className="flex flex-col items-center w-1/2">
              <p>{t('fast_charge_text_1')}</p>
              <div className="flex flex-col lg:flex-row lg:items-start items-center my-6">
                <div className="flex flex-col items-center text-center w-3/4">
                  <img src={t('image_sx12_battery_1')}></img>
                  <div>{t('fast_charge_caption_1')}</div>
                </div>
                <div className="flex flex-col items-center text-center w-3/4">
                  <img src={t('image_sx12_battery_2')}></img>
                  <div>{t('fast_charge_caption_2')}</div>
                </div>
              </div>
              <p>{t('fast_charge_disclaimer_1')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 items-center justify-center p-3 text-gray-500">
        <HeaderSubtitleBlock
          title={t('power_bank_header_1')}
          subtitle={[t('power_bank_text_1')]}
          textCenter={true}
          headerColour="text-black"
        />
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <img src={t('image_charge_1')} className="h-30 w-30 mr-14"></img>
          <p className="w-3/4">{t('power_bank_text_2')}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <img src={t('image_charge_2')} className="h-30 w-30 mr-14"></img>
          <p className="w-3/4">{t('power_bank_text_3')}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <img src={t('image_charge_3')} className="h-30 w-30 mr-14"></img>
          <p className="w-3/4">{t('power_bank_text_4')}</p>
        </div>
        <div className=" text-gray-400 text-sm flex flex-col items-center justify-center mt-10">
          <p className="w-full lg:w-3/4">{t('power_bank_disclaimer_1')}</p>
          <p className="w-full lg:w-3/4">{t('power_bank_disclaimer_2')}</p>
          <p className="w-full lg:w-3/4">{t('power_bank_disclaimer_3')}</p>
        </div>
      </div>
      <div className="my-10"></div>
      <ThreeBoxes
        boxes={[t('box_text_1'), t('box_text_2'), t('box_text_3')]}
        index={1}
      />
      <div className="my-10"></div>
      <div className="flex flex-col items-center justify-center">
        <HeaderSubtitleBlock
          headerColour="text-black"
          topTag={t('box_text_2')}
          title={t('compact_design_header_1')}
          subtitle={[
            t('compact_design_text_1'),
            t('compact_design_text_2'),
            t('compact_design_text_3'),
          ]}
          textCenter={true}
        />
        <div className="flex flex-col lg:flex-row items-center w-3/4 gap-x-10">
          <img src={t('image_vaio_black')} className="w-full lg:w-1/2"></img>
          <p className="w-full lg:w-1/2">{t('compact_design_text_4')}</p>
        </div>
      </div>
      <div className="my-20"></div>
      <div>
        <HeaderSubtitleBlock
          titleSize="text-4xl"
          headerColour="text-black"
          title={t('never_disappoint_header_1')}
          textCenter={true}
        />
        <TextImageRow
          titleColour="text-black"
          title={t('intel_core_header_1')}
          text={[t('intel_core_text_1')]}
          titleSize="text-2xl"
          images={[{ imageSrc: t('image_intel_core'), caption: '' }]}
        />
      </div>
      <div className="bg-black flex flex-col items-center justify-center">
        <img src={t('image_true_performance_1')} className="my-10" />
        <TextImageRow
          titleColour="text-white"
          textColour="text-white"
          title={t('vaio_true_performance_header_1')}
          text={[t('vaio_true_performance_text_1')]}
          disclaimer={[t('vaio_true_performance_disclaimer_1')]}
          titleSize="text-2xl"
          images={[{ imageSrc: t('image_true_performance_2'), caption: '' }]}
        />
      </div>
      <div className="my-10"></div>
      <div className="flex flex-col items-center justify-center">
        <HeaderSubtitleBlock
          titleSize="text-4xl"
          headerColour="text-black"
          title={t('data_retrieval_header_1')}
          subtitle={[t('data_retrieval_text_1')]}
          textCenter={true}
        />
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-4 gap-y-10 lg:gap-y-0 w-5/6 items-center">
          <div className="flex flex-col w-full leading-relaxed">
            <h1 className="text-xl mb-2 text-black">
              {t('ssd_performance_subheader_1')}
            </h1>
            <p className="mb-2 text-sm">{t('ssd_performance_text_1')}</p>
            <img src={t('image_ssd_performance_1')}></img>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-xl mb-2 text-black">
              {t('ssd_performance_subheader_2')}
            </h1>
            <p className="mb-2 text-sm">{t('ssd_performance_text_2')}</p>
            <img src={t('image_ssd_performance_2')}></img>
          </div>
        </div>
      </div>
      <div className=" my-20"></div>
      <div className="flex flex-col items-center">
        <HeaderSubtitleBlock
          title={t('connectivity_header_1')}
          headerColour="text-black"
          subtitleColour="text-gray-500"
          titleSize="text-5xl"
          subtitleSize="text-xl"
          subtitle={[t('connectivity_text_1'), t('connectivity_text_2')]}
          disclaimer={[t('connectivity_text_3')]}
          textCenter={true}
        />
        <img src={t('image_connectivity')}></img>
      </div>
      <div className=" my-20"></div>
      <ThreeBoxes
        boxes={[t('box_text_1'), t('box_text_2'), t('box_text_3')]}
        index={2}
      />
      <div className="my-20"></div>
      <div className="flex flex-col items-center">
        <Tag text={t('box_text_2')} />
        <TextImageRow
          textCenter={false}
          titleColour="text-black"
          images={[{ imageSrc: t('image_functionality_1') }]}
          title={t('functionality_header_1')}
          text={[t('functionality_text_1')]}
        />
        <TextImageRow
          textCenter={false}
          titleColour="text-black"
          images={[{ imageSrc: t('image_functionality_2') }]}
          title={t('functionality_header_2')}
          text={[t('functionality_text_2')]}
        />
        <TextImageRow
          textCenter={false}
          titleColour="text-black"
          images={[{ imageSrc: t('image_functionality_3') }]}
          title={t('functionality_header_3')}
          text={[t('functionality_text_3')]}
        />
        <TextImageRow
          textCenter={false}
          titleColour="text-black"
          images={[{ imageSrc: t('image_functionality_4') }]}
          title={t('functionality_header_4')}
          text={[t('functionality_text_4')]}
        />
        <TextImageRow
          textCenter={false}
          titleColour="text-black"
          images={[{ imageSrc: t('image_functionality_5') }]}
          title={t('functionality_header_5')}
          text={[t('functionality_text_5')]}
        />
        <TextImageRow
          textCenter={false}
          titleColour="text-black"
          images={[{ imageSrc: t('image_functionality_6') }]}
          title={t('functionality_header_6')}
          text={[t('functionality_text_6')]}
        />
      </div>
      <Disclaimer />
    </div>
  );
}
