import ProductBanner from '@/components/ProductBanner';
import TextImageRow from '@/components/s11/TextImageRow';
import Disclaimer from '@/components/se2021/disclaimer';
import HeaderImageBlock from '@/components/se2021/HeaderImageBlock';
import HeaderSubtitleBlock from '@/components/sx12/HeaderSubTitleBlock';
import ThreeBoxes from '@/components/sx12/ThreeBoxes';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('product.a12');
  return (
    <div className="flex flex-col items-center justify-center">
      <ProductBanner
        mobileImage={t('image_a12_banner_s')}
        desktopImage={t('image_a12_banner_l')}
        altText="s11 banner"
      />
      <div className="my-20"></div>
      <HeaderSubtitleBlock
        title={t('new_gen_header_1')}
        subtitle={[t('new_gen_text_1'), t('new_gen_text_2')]}
        textCenter={true}
        titleSize="text-5xl"
      />
      <div className="my-20"></div>
      <div
        className={`py-16 w-full flex flex-col lg:flex-row bg-cover bg-center items-center px-3 h-40vh`}
        style={{ backgroundImage: `url('${t('image_a_12_all_black')}')` }}
      >
        <div className="w-1/2"></div>
        <div className="w-1/2 text-white">
          <h1>{t('light_dark_text_1')}</h1>
          <br />
          <h1>{t('light_dark_text_2')}</h1>
        </div>
      </div>
      <div className="my-10"></div>
      <ThreeBoxes
        boxes={[t('box_text_1'), t('box_text_2'), t('box_text_3')]}
        index={0}
      />
      <HeaderImageBlock
        topTag={t('box_text_1')}
        title={t('meet_style_header_1')}
        topText={[t('meet_style_text_1'), t('meet_style_text_2')]}
        textCenter={true}
        titleSize={'text-5xl'}
        textColour="text-gray-500"
        subtitleSize="text-lg"
        imageSrc={t('image_a12_screen_keyboard_cross')}
      />
      <div className="my-20"></div>
      <HeaderImageBlock
        title={t('every_scenario_header_1')}
        topText={[
          t('every_scenario_text_1'),
          t('every_scenario_text_2'),
          t('every_scenario_text_3'),
        ]}
        titleSize={'text-5xl'}
        textColour="text-gray-500"
        subtitleSize="text-lg"
      />
      <div className="flex flex-col items-center justify-center text-gray-500 p-3">
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 p-6 items-center w-3/4">
          <div className="flex flex-col items-center text-center">
            <img src={t('image_a12_silver_vaio')} />
            <p>{t('every_scenario_caption_1')}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={t('image_a12_vaio_screen')} />
            <p>{t('every_scenario_caption_2')}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={t('image_a12_vaio_screen_reverse')} />
            <p>{t('every_scenario_caption_3')}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 w-3/4 items-center">
          <div className="flex flex-col items-center text-center">
            <img src={t('image_a12_vaio_screen_flat')} />
            <p>{t('every_scenario_caption_4')}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={t('image_a12_vaio_screen_reverse')} />
            <p className="text-sm">{t('every_scenario_caption_5')}</p>
            <p>{t('every_scenario_caption_5_1')}</p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-sm">{t('every_scenario_disclaimer_1')}</p>
          <p className="text-sm">{t('every_scenario_disclaimer_2')}</p>
          <p className="text-sm">{t('every_scenario_disclaimer_3')}</p>
        </div>
      </div>
      <div className="my-20"></div>
      <HeaderImageBlock
        title={t('stabilizer_header_1')}
        titleCenter={false}
        textCenter={false}
        topText={[t('stabilizer_text_1')]}
        titleSize={'text-2xl'}
        textColour="text-gray-500"
        subtitleSize="text-lg"
        imageSrc={t('image_a12_vaio_open_sequence')}
        imageWidthLarge="w-5/6"
        imageWidthSmall="w-full"
      />
      <div className="my-10"></div>
      <div className="flex flex-col items-center">
        <div className=" border-2 border-gray-300 w-10/12 py-14 px-6">
          <h1 className=" text-lg text-gray-500">{t('2_in_1_subtitle_1')}</h1>
          <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
            <div className="flex flex-col items-center text-center">
              <img src={t('image_2_in_1_1')} />
              <p>{t('2_in_1_caption_1')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={t('image_2_in_1_2')} />
              <p>{t('2_in_1_caption_2')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={t('image_2_in_1_3')} />
              <p>{t('2_in_1_caption_3')}</p>
            </div>
          </div>
        </div>
      </div>
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        text={[t('stabilizer_flap_text_1')]}
        images={[{ imageSrc: t('image_a12_vaio_stabilizer_flap') }]}
        textSize="text-lg"
      />
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        text={[t('dual_release_text_1')]}
        title={t('dual_release_header_1')}
        images={[
          { imageSrc: t('image_a12_vaio_finger_detatch') },
          { imageSrc: t('image_a12_vaio_hand_extract') },
        ]}
        titleSize="text-2xl"
        textSize="text-lg"
      />
      <div className="my-10 lg:my-20"></div>
      <ThreeBoxes
        boxes={[t('box_text_1'), t('box_text_2'), t('box_text_3')]}
        index={1}
      />
      <div className="my-10 lg:my-20"></div>
      <HeaderImageBlock
        topTag={t('box_text_2')}
        title={t('ideal_work_style_header_1')}
        titleCenter={false}
        textCenter={false}
        topText={[t('ideal_work_style_text_1')]}
        titleSize={'text-5xl'}
        textColour="text-gray-500"
        subtitleSize="text-lg"
        imageSrc={t('image_a12_tablet_stylus')}
        imageWidthLarge="w-5/6"
        imageWidthSmall="w-full"
      />
      <div className="my-10"></div>
      <HeaderSubtitleBlock
        title={t('comfortable_to_use_header_1')}
        titleSize="text-5xl"
      />
      <HeaderSubtitleBlock
        title={t('lighweight_header_1')}
        subtitle={[t('lighweight_text_1')]}
        disclaimer={[t('lightweight_disclaimer_1')]}
        textCenter={false}
        titleSize="text-2xl"
        titleCenter={false}
      />
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        text={[t('intuitive_touch_text_1')]}
        title={t('intuitive_touch_header_1')}
        images={[{ imageSrc: t('image_a12_tablet_graph') }]}
        titleSize="text-2xl"
        textSize="text-lg"
      />
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        text={[t('intuitive_touch_text_2')]}
        images={[
          { imageSrc: t('image_a12_wacom') },
          { imageSrc: t('image_a12_tablet_drawing') },
        ]}
        titleSize="text-2xl"
        textSize="text-lg"
      />
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        text={[t('intuitive_touch_text_3')]}
        images={[
          { imageSrc: t('image_a12_optical_bond_1') },
          { imageSrc: t('image_a12_optical_bond_2') },
        ]}
        titleSize="text-2xl"
        textSize="text-lg"
      />
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        text={[t('wireless_keyboard_text_1'), t('wireless_keyboard_text_2')]}
        title={t('wireless_keyboard_header_1')}
        images={[{ imageSrc: t('image_a12_cross_tablet_typing') }]}
        disclaimer={[t('wireless_keyboard_disclaimer_1')]}
        titleSize="text-4xl"
        textSize="text-lg"
      />
      <div className="my-10"></div>
      <div className="flex flex-col items-center">
        <div className=" border-2 border-gray-300 w-10/12 py-14 px-6">
          <TextImageRow
            textColour="text-gray-500"
            textCenter={false}
            text={[t('illustration_text_1')]}
            title={t('illustration_header_1')}
            images={[{ imageSrc: t('image_a12_cartoon_illustration_1') }]}
            titleSize="text-2xl"
            textSize="text-lg"
          />
          <TextImageRow
            textColour="text-gray-500"
            textCenter={false}
            text={[t('illustration_text_2')]}
            title={t('illustration_header_2')}
            images={[{ imageSrc: t('image_a12_cartoon_illustration_2') }]}
            disclaimer={[t('illustration_disclaimer_1')]}
            titleSize="text-2xl"
            textSize="text-lg"
          />
          <TextImageRow
            textColour="text-gray-500"
            textCenter={false}
            text={[t('illustration_text_3')]}
            title={t('illustration_header_3')}
            images={[{ imageSrc: t('image_a12_cartoon_illustration_3') }]}
            titleSize="text-2xl"
            textSize="text-lg"
          />
          <TextImageRow
            textColour="text-gray-500"
            textCenter={false}
            text={[t('illustration_text_4')]}
            title={t('illustration_header_4')}
            images={[{ imageSrc: t('image_a12_cartoon_illustration_4') }]}
            titleSize="text-2xl"
            textSize="text-lg"
          />
          <TextImageRow
            textColour="text-gray-500"
            textCenter={false}
            text={[t('illustration_text_5')]}
            title={t('illustration_header_5')}
            images={[{ imageSrc: t('image_a12_cartoon_illustration_5') }]}
            titleSize="text-2xl"
            textSize="text-lg"
          />
        </div>
      </div>
      <div className="my-10 lg:my-20"></div>
      <ThreeBoxes
        boxes={[t('box_text_1'), t('box_text_2'), t('box_text_3')]}
        index={2}
      />
      <div className="my-10 lg:my-20"></div>
      <HeaderImageBlock
        topTag={t('box_text_3')}
        title={t('for_perfection_header_1')}
        titleCenter={false}
        textCenter={true}
        topText={[
          t('for_perfection_text_1'),
          t('for_perfection_text_2'),
          t('for_perfection_text_3'),
        ]}
        titleSize={'text-5xl'}
        textColour="text-gray-500"
        subtitleSize="text-xl"
        imageSrc={t('image_a12_vaio_screen_front')}
        imageWidthLarge="w-1/2"
        imageWidthSmall="w-full"
      />
      <div className="my-10"></div>
      <HeaderSubtitleBlock
        title={t('handy_device_header_1')}
        titleSize="text-5xl"
      />
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        text={[t('screen_keyboard_text_1')]}
        title={t('screen_keyboard_header_1')}
        images={[{ imageSrc: t('image_a12_vaio_back_case') }]}
        disclaimer={[
          t('screen_keyboard_disclaimer_1'),
          t('screen_keyboard_disclaimer_2'),
        ]}
        titleSize="text-2xl"
        textSize="text-lg"
      />
      <HeaderSubtitleBlock
        title={t('battery_life_header_1')}
        titleSize="text-3xl"
        textCenter={false}
        subtitle={[t('battery_life_text_1')]}
        disclaimer={[
          t('battery_life_disclaimer_1'),
          t('battery_life_disclaimer_2'),
        ]}
      />
      <div className="my-6 lg:my-12"></div>
      <div className="flex flex-col items-center">
        <HeaderSubtitleBlock
          title={t('thoughtful_design_header_1')}
          titleSize="text-5xl"
        />
        <div className="my-5 lg:my-10"></div>
        <HeaderSubtitleBlock
          title={t('silent_keyboard_header_1')}
          titleSize="text-3xl"
          textCenter={false}
          titleCenter={false}
          subtitle={[t('silent_keyboard_text_1'), t('silent_keyboard_text_2')]}
        />
        <div className="w-full lg:w-3/4">
          <TextImageRow
            textColour="text-gray-500"
            textCenter={false}
            text={[t('silent_keyboard_text_3')]}
            images={[{ imageSrc: t('image_a12_key_comparison') }]}
            textSize="text-lg"
          />
          <TextImageRow
            textColour="text-gray-500"
            textCenter={false}
            text={[t('silent_keyboard_text_4')]}
            images={[{ imageSrc: t('image_a12_key_backlit') }]}
            disclaimer={[
              t('silent_keyboard_disclaimer_1'),
              t('silent_keyboard_disclaimer_2'),
            ]}
            textSize="text-lg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-10">{t('smooth_touch_pad_header_1')}</h1>
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-start w-3/4 gap-x-10 text-gray-600">
          <div className="w-full flex flex-col items-center">
            <p>{t('smooth_touch_pad_text_1')}</p>
            <img src={t('image_trackpad_zoom_in')} />
          </div>
          <div className="w-full flex flex-col items-center">
            <p>{t('smooth_touch_pad_text_2')}</p>
            <img src={t('image_gesture_control')} />
          </div>
        </div>
        <div className="my-6"></div>
        <TextImageRow
          textColour="text-gray-500"
          textCenter={false}
          title={t('infinite_palm_header_1')}
          text={[t('infinite_palm_text_1')]}
          images={[{ imageSrc: t('image_typing_on_computer') }]}
          textSize="text-lg"
          titleSize="text-2xl"
        />
      </div>
      <HeaderSubtitleBlock title={t('compact_header_1')} />
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        title={t('compact_subheader_1')}
        text={[t('compact_text_1'), t('compact_text_2')]}
        disclaimer={[
          t('compact_disclaimer_1'),
          t('compact_disclaimer_2'),
          t('compact_disclaimer_3'),
        ]}
        images={[{ imageSrc: t('image_compact_ports') }]}
        textSize="text-lg"
        titleSize="text-2xl"
        itemAlign="items-start"
      />
      <HeaderImageBlock
        textCenter={false}
        bottomText={[t('compact_text_3')]}
        textColour="text-gray-500"
        subtitleSize="text-xl"
        imageSrc={t('image_side_by_side')}
        imageWidthLarge="w-5/6"
        imageWidthSmall="w-full"
      />
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        title={t('premium_speaker_header_1')}
        text={[t('premium_speaker_text_1')]}
        images={[{ imageSrc: t('image_dual_microphone') }]}
        textSize="text-lg"
        titleSize="text-2xl"
        itemAlign="items-start"
      />
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        title={t('ultra_fast_wifi_header_1')}
        text={[t('ultra_fast_wifi_text_1')]}
        images={[{ imageSrc: t('image_ultrafast_wifi') }]}
        textSize="text-lg"
        titleSize="text-2xl"
        itemAlign="items-start"
      />
      <div className="my-6"></div>
      <HeaderSubtitleBlock
        title={t('exceptional_security_header_1')}
        titleSize="text-5xl"
      />
      <div className="my-6"></div>

      <HeaderSubtitleBlock
        title={t('exceptional_security_subheader_1')}
        subtitle={[t('exceptional_security_text_1')]}
        disclaimer={[t('exceptional_security_disclaimer_1')]}
        textCenter={false}
        titleCenter={false}
        titleSize="text-2xl"
      />
      <div className="flex flex-col mb-10 items-center">
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-3/4 items-center gap-x-4">
          <img src={t('image_face_recog_camera')} className="w-full h-auto" />
          <img src={t('image_fingerprint_sensor')} className="w-full h-auto" />
        </div>
      </div>
      <div className="my-6"></div>
      <HeaderSubtitleBlock title={t('robust_header_1')} titleSize="text-5xl" />
      <div className="my-6"></div>
      <HeaderSubtitleBlock
        title={t('robust_subheader_1')}
        subtitle={[t('robust_text_1')]}
        textCenter={false}
        titleCenter={false}
        titleSize="text-2xl"
      />
      <div className="flex flex-col mb-10 items-center justify-center">
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-3/4 items-center gap-x-4">
          <div className="flex flex-col items-center justify-center">
            <img src={t('image_close_up_bezel')} className="w-full h-auto" />
            <p className="mt-3 text-gray-500">{t('robust_caption_1')}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <iframe
              className=" h-225 w-auto"
              src="https://www.youtube.com/embed/Su9Q2awpbQM?si=RMPmt-9w35Z0Xa9r"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="mt-3 text-gray-500">{t('robust_caption_2')}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-5/6 items-center lg:gap-x-24 gap-y-6 mt-0 lg:mt-6 justify-center">
          <div className="w-full flex flex-col items-center">
            <iframe
              className=" h-full w-auto"
              src="https://www.youtube.com/embed/Nio7-GP0Qdc?si=OjJW_zXO-hNMHSgx"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="w-full flex flex-col items-center">
            <iframe
              className="h-full w-auto"
              src="https://www.youtube.com/embed/MbHH7s8LGkM?si=KNDS2az7630Q9hGY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="w-full flex flex-col items-center">
            <iframe
              className=" h-full w-auto"
              src="https://www.youtube.com/embed/00ajPX6IoN4?si=m94kIw08pwKRqcVo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="w-3/4 text-sm text-gray-500">
          <p className="my-2">{t('robust_disclaimer_1')}</p>
          <p>{t('robust_disclaimer_2')}</p>
        </div>
      </div>
      <div className="my-6"></div>
      <HeaderSubtitleBlock
        title={t('exceptional_performance_header_1')}
        titleSize="text-5xl"
      />
      <div className="my-6"></div>
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        title={t('exceptional_performance_subheader_1')}
        text={[t('exceptional_performance_text_1')]}
        images={[{ imageSrc: t('image_pcb_black') }]}
        textSize="text-lg"
        titleSize="text-2xl"
        itemAlign="items-start"
      />
      <HeaderSubtitleBlock
        title={t('exceptional_performance_subheader_2')}
        subtitle={[t('exceptional_performance_text_2')]}
        textCenter={false}
        titleSize="text-2xl"
      />

      <div className="my-6"></div>
      <HeaderSubtitleBlock
        title={t('extended_viewing_header_1')}
        titleSize="text-5xl"
      />
      <div className="my-6"></div>
      <TextImageRow
        textColour="text-gray-500"
        textCenter={false}
        title={t('extended_viewing_subheader_1')}
        text={[t('extended_viewing_text_1')]}
        images={[
          { imageSrc: t('image_view_angle_1') },
          { imageSrc: t('image_view_angle_2') },
        ]}
        textSize="text-lg"
        titleSize="text-2xl"
        itemAlign="items-start"
      />
      <div className="my-6"></div>
      <HeaderSubtitleBlock
        title={t('made_in_japan_header_1')}
        titleSize="text-5xl"
      />
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-5/6 items-center gap-x-4">
        <HeaderSubtitleBlock
          title={t('made_in_japan_subheader_1')}
          titleSize="text-2xl"
          titleCenter={false}
          subtitle={[t('made_in_japan_text_1')]}
        />
        <HeaderSubtitleBlock
          title={t('made_in_japan_subheader_2')}
          titleSize="text-2xl"
          titleCenter={false}
          subtitle={[t('made_in_japan_text_2')]}
        />
      </div>
      <Disclaimer />
    </div>
  );
}
