import ProductBanner from '@/components/ProductBanner';
import FourBoxes from '@/components/s11/FourBoxes';
import Tag from '@/components/s11/Tag';
import TextImageRow from '@/components/s11/TextImageRow';
import Disclaimer from '@/components/se2021/disclaimer';
import HeaderImageBlock from '@/components/se2021/HeaderImageBlock';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('product.s11');

  return (
    <div>
      <ProductBanner
        mobileImage={t('image_s11_banner_s')}
        desktopImage={t('image_s11_banner_l')}
        altText="s11 banner"
      />
      <FourBoxes
        boxes={[
          t('box_text_1'),
          t('box_text_2'),
          t('box_text_3'),
          t('box_text_4'),
        ]}
        index={1}
      />
      <div className="w-full flex flex-col items-center text-gray-800 leading-loose px-3 lg:px-0">
        <Tag text={t('box_text_2')} />
        <h1 className="text-center text-4xl mb-5 lg:w-4/6 w-4/5 leading-relaxed">
          {t('performance_header_1')}
        </h1>
        <div className="w-1/2 my-5 text-2xl text-center">
          <p>{t('performance_subheader_1')}</p>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          {t('performance_disclaimer_1')}
        </p>
        <img
          src={t('image_vaio_true_performance')}
          className="w-1/3 h-auto"
        ></img>
        <img
          src={t('image_vaio_true_performance_2')}
          className="w-1/2 h-auto"
        ></img>
      </div>
      <div className="w-full flex flex-col items-center mt-7">
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-4 w-5/6 items-center">
          <div className="flex flex-col w-full leading-relaxed">
            <h1 className="text-xl mb-2">{t('cpu_performance_subtitle_1')}</h1>
            <p className="mb-2 text-sm">{t('cpu_performance_text_1')}</p>
            <img src={t('image_cpu_performance')}></img>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-xl mb-2">{t('gpu_performance_subtitle_1')}</h1>
            <p className="mb-2 text-sm">{t('gpu_performance_text_1')}</p>
            <img src={t('image_gpu_performance')}></img>
          </div>
        </div>
      </div>
      <div className="mt-16"></div>
      <div
        className="py-16 w-full flex flex-col bg-cover bg-center h-70vh items-center px-3"
        style={{ backgroundImage: "url('/images/product/s11/pt03-1.jpg')" }}
      >
        <div className="w-full flex flex-col items-center justify-center content-center px-2">
          <Tag text={t('box_text_2')} />
          <h1 className="text-center text-4xl mb-5 lg:w-5/6 leading-relaxed text-white">
            {t('heat_sink_header_1')}
          </h1>
          <div className="lg:w-4/6 w-full my-5 text-lg text-center text-white">
            <p>{t('heat_sink_text_1')}</p>
            <br />
            <p>{t('heat_sink_text_2')}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-7 text-gray-700 mb-20">
        <Tag text={t('box_text_2')} />
        <h1 className="text-center text-4xl mb-5 lg:w-4/6 w-4/5 leading-relaxed">
          {t('ssd_header_1')}
        </h1>
        <div className="w-1/2 my-5 text-lg text-center">
          <p>{t('ssd_text_1')}</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-4 w-5/6 items-center mt-5">
          <div className="flex flex-col w-full leading-relaxed">
            <h1 className="text-xl mb-2">{t('ssd_performance_subheader_1')}</h1>
            <p className="mb-2 text-sm">{t('ssd_performance_text_1')}</p>
            <img src={t('image_ssd_performance_1')}></img>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-xl mb-2">{t('ssd_performance_subheader_2')}</h1>
            <p className="mb-2 text-sm">{t('ssd_performance_text_2')}</p>
            <img src={t('image_ssd_performance_2')}></img>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 lg:w-3/4 w-full">
          {t('ssd_disclaimer_1')}
          <span>
            <br />
          </span>
          {t('ssd_disclaimer_2')}
        </p>
      </div>
      <FourBoxes
        boxes={[
          t('box_text_1'),
          t('box_text_2'),
          t('box_text_3'),
          t('box_text_4'),
        ]}
        index={2}
      />
      <div className="mt-10"></div>
      <HeaderImageBlock
        topTag={t('box_text_3')}
        imageSrc={t('image_vaio_silver')}
        title={t('hexagonal_design_header_1')}
        topText={[t('hexagonal_design_text_1')]}
        textCenter={true}
      />
      <TextImageRow
        tagText={t('box_text_3')}
        title={t('slanting_angle_header_1')}
        text={[t('slanting_angle_text_1')]}
        images={[
          {
            imageSrc: t('image_slanting_angle'),
            caption: '',
          },
        ]}
      />
      <TextImageRow
        tagText={t('box_text_3')}
        title={t('lightweight_header_1')}
        text={[t('lightweight_text_1'), t('lightweight_text_2')]}
        images={[
          {
            imageSrc: t('image_computer_circle'),
            caption: '',
          },
        ]}
        reverseOrder={true}
        disclaimer={[t('lightweight_disclaimer_1')]}
      />
      <div className="bg-black text-white">
        <HeaderImageBlock
          imageSrc={t('image_silent_keyboard')}
          topTag={t('box_text_3')}
          title={t('silent_keyboard_header_1')}
          topText={[t('silent_keyboard_text_1')]}
          textCenter={true}
        />
      </div>
      <TextImageRow
        tagText={t('box_text_3')}
        title={t('fingerprint_coat_header_1')}
        text={[t('fingerprint_coat_text_1')]}
        images={[
          {
            imageSrc: t('image_enhanced_key'),
            caption: t('fingerprint_coat_caption_1'),
          },
          {
            imageSrc: t('image_stained_key'),
            caption: t('fingerprint_coat_caption_2'),
          },
        ]}
      />
      <TextImageRow
        tagText={t('box_text_3')}
        title={t('backlit_keyboard_header_1')}
        text={[t('backlit_keyboard_text_1')]}
        images={[
          {
            imageSrc: t('image_backlit_keyboard'),
          },
        ]}
      />
      <div className="bg-gray-300 text-white">
        <TextImageRow
          tagText={t('box_text_3')}
          title={t('finger_print_scanner_header_1')}
          text={[
            t('finger_print_scanner_text_1'),
            t('finger_print_scanner_text_2'),
          ]}
          images={[
            {
              imageSrc: t('image_fingerprint_scanner'),
            },
          ]}
          reverseOrder={true}
        />
      </div>
      <div className="bg-black text-white">
        <TextImageRow
          tagText={t('box_text_3')}
          title={t('backlit_keyboard_header_1')}
          text={[t('backlit_keyboard_text_1')]}
          images={[
            {
              imageSrc: t('image_battery_life'),
            },
          ]}
          disclaimer={[t('battery_life_disclaimer_1')]}
        />
      </div>
      <TextImageRow
        tagText={t('box_text_3')}
        title={t('optimal_network_header_1')}
        text={[
          t('optimal_network_text_1'),
          t('optimal_network_text_2'),
          t('optimal_network_text_3'),
        ]}
        images={[
          {
            imageSrc: t('image_vaio_coffee'),
          },
        ]}
        textColour="text-gray-500"
      />
      <div className="mt-10"></div>
      <TextImageRow
        tagText={t('box_text_3')}
        title={t('seamless_connect_header_1')}
        text={[t('seamless_connect_text_1'), t('seamless_connect_text_2')]}
        images={[
          {
            imageSrc: t('image_optimal_network'),
          },
        ]}
        disclaimer={[t('seamless_connect_disclaimer_1')]}
        textColour="text-gray-500"
      />
      <div className="mt-10"></div>
      <div className="w-full flex flex-col items-center text-gray-800 leading-loose p-3 lg:px-0 text-center">
        <Tag text={t('box_text_3')} />
        <h1 className="text-center text-4xl mb-5 lg:w-4/6 w-4/5 leading-loose">
          {t('seamless_connect_header_1')}
        </h1>
        <h2 className="w-4/5 lg:w-4/6 text-xl text-center">
          {t('seamless_connect_text_1')}
        </h2>
        <img src={t('image_side_2_side')} className="w-3/4 h-auto mt-5"></img>
        <p className="text-md mb-4 lg:w-4/6 w-4/5 px-3 mt-8">
          {t('seamless_connect_text_2')}
        </p>
        <p className="text-xs text-gray-500 mb-4 px-3">
          {t('seamless_connect_disclaimer_1')}
        </p>
      </div>
      <FourBoxes
        boxes={[
          t('box_text_1'),
          t('box_text_2'),
          t('box_text_3'),
          t('box_text_4'),
        ]}
        index={3}
      />
      <div className="w-full flex flex-col items-center text-gray-800 leading-loose p-3 lg:px-0 text-center">
        <Tag text={t('box_text_4')} />
        <h1 className="text-center text-4xl mb-5 lg:w-4/6 w-4/5 leading-loose">
          {t('quality_test_header_1')}
        </h1>
        <h2 className="w-4/5 lg:w-4/6 text-md text-center">
          {t('quality_test_text_1')}
          <span>
            <br />
          </span>
          {t('quality_test_text_2')}
        </h2>
        <p className="text-md mb-2 lg:w-4/6 w-4/5 px-3 mt-8"></p>
        <div className="container mx-auto px-4 text-center h-auto lg:w-3/5 w-full items-center">
          <div className="relative overflow-hidden pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dqTI4zxXDlA?si=RUK-P3yKSiQ-BXVa"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <p className="text-md mb-4 lg:w-4/6 w-4/5 px-3 mt-8">
          {t('seamless_connect_text_2')}
        </p>
        <p className="text-xs text-gray-500 mb-4 px-3">
          {t('quality_test_disclaimer_1')}
          <span className="mt-1">
            <br />
          </span>
          {t('quality_test_disclaimer_2')}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-x-2 bg-gray-500 p-6">
          <div className="flex flex-col items-center text-center p-2 w-full">
            <h1 className="text-2xl text-white mb-2">{t('test_pen_bend')}</h1>
            <iframe
              className="lg:w-450 lg:h-300 w-300 h-200"
              src="https://www.youtube.com/embed/kUeRPz_OjKM?si=FmSC0g7DmsKffkCW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="flex flex-col items-center text-center p-2 w-full">
            <h1 className="text-2xl text-white mb-2">{t('test_90cm')}</h1>
            <iframe
              className="lg:w-450 lg:h-300 w-300 h-200"
              src="https://www.youtube.com/embed/bb9ww4ZcgCc?si=0JTAzDi2IZrSGiPI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="flex flex-col items-center text-center p-2 w-full">
            <h1 className="text-2xl text-white mb-2">{t('test_vibration')}</h1>
            <iframe
              className="lg:w-450 lg:h-300 w-300 h-200"
              src="https://www.youtube.com/embed/w19Vc1TGGfI?si=uLtRxqt7UUaLRShp"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="flex flex-col items-center text-center p-2 w-full mb-10">
            <h1 className="text-2xl text-white mb-2">
              {t('test_corner_impact')}
            </h1>
            <iframe
              className="lg:w-450 lg:h-300 w-300 h-200"
              src="https://www.youtube.com/embed/I6ob6z6vcd0?si=dNEt4YG2Ja60s3P3"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <Disclaimer />
    </div>
  );
}
