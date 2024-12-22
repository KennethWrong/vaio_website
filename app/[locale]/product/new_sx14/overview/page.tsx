import ProductBanner from '@/components/ProductBanner';
import TextImageRow from '@/components/s11/TextImageRow';
import HeaderImageBlock from '@/components/se2021/HeaderImageBlock';
import HeaderSubtitleBlock from '@/components/sx12/HeaderSubTitleBlock';
import ImageTitleTextBlock from '@/components/sx14/ImageTitleTextBlock';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('product.sx14');

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4">
        <ProductBanner
          mobileImage={t('image_sx14_banner_sm')}
          desktopImage={t('image_sx14_banner_lg')}
          altText="s11 banner"
        />
        <div className="mt-10"></div>
        <HeaderSubtitleBlock
          title={t('visualize_header_1')}
          subtitle={[t('new_vaio_header_1')]}
          textCenter={true}
          titleCenter={true}
          titleSize={'text-2xl'}
          subtitleSize={'text-5xl'}
          subtitleColour="text-black"
        />
        <HeaderSubtitleBlock
          subtitle={[t('new_vaio_text_1')]}
          textCenter={false}
          subtitleSize={'text-xl'}
        />
        <img src={t('image_vaio_flat_back')} className="w-full h-auto" />
        <div className="mt-10"></div>
        <HeaderSubtitleBlock
          title={t('beautiful_tough_header_1')}
          textCenter={false}
          titleSize="text-5xl"
          titleBold={true}
        />
        <HeaderSubtitleBlock
          title={t('unveiling_header_1')}
          subtitle={[t('unveiling_text_1')]}
          textCenter={false}
          titleCenter={false}
          titleSize="text-3xl"
          titleBold={true}
        />
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-3/4 gap-x-10 gap-y-4">
          <img src={t('image_vaio_back_tilted')} />
          <img src={t('image_vaio_side_ports')} />
        </div>
        <div className="mt-10"></div>
        <HeaderSubtitleBlock
          title={t('robust_notebook_header_1')}
          subtitle={[t('robust_notebook_text_1')]}
          disclaimer={[t('robust_notebook_disclaimer_1')]}
          textCenter={false}
          titleCenter={false}
          titleSize="text-3xl"
          titleBold={true}
        />
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-3/4 gap-x-10 gap-y-4">
          <iframe
            className=" h-full w-full"
            src="https://www.youtube.com/embed/Nio7-GP0Qdc?si=OjJW_zXO-hNMHSgx"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <img src={t('image_mil_std')} />
        </div>
        <div className="mt-10"></div>
        <div className="flex flex-col items-center p-4 bg-gray-200 lg:w-10/12 w-full">
          <HeaderSubtitleBlock
            title={t('improved_rigidity_header_1')}
            subtitle={[t('improved_rigidity_subheader_1')]}
            textCenter={false}
            titleCenter={true}
            titleSize="text-5xl"
            subtitleSize="text-3xl"
            subtitleColour="text-black"
            titleBold={true}
          />
          <p className="text-gray-500 text-lg w-3/4">
            {t('improved_rigidity_text_1')}
          </p>
          <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-3/4 gap-x-10 gap-y-4 mt-5">
            <img src={t('image_vaio_resin_1')} />
            <img src={t('image_vaio_resin_2')} />
          </div>
        </div>
        <TextImageRow
          title={t('lifestyle_colour_header_1')}
          text={[t('lifestyle_colour_text_1')]}
          images={[{ imageSrc: t('image_four_colours') }]}
          titleBold={true}
        />

        <div className="w-full lg:w-11/12 bg-black p-6">
          <TextImageRow
            title={t('kachi_iro_header_1')}
            text={[t('kachi_iro_text_1')]}
            images={[{ imageSrc: t('image_kachi_iro') }]}
            textColour="text-white"
            titleSize="text-xl"
            textSize="text-md"
            titleColour="text-white"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
            reverseOrder={true}
          />
        </div>
        <div className="mt-6"></div>
        <div className="w-full lg:w-11/12 bg-black p-6">
          <TextImageRow
            title={t('all_black_header_1')}
            text={[t('all_black_text_1')]}
            images={[{ imageSrc: t('image_all_black_computer') }]}
            textColour="text-white"
            titleSize="text-xl"
            textSize="text-md"
            titleColour="text-white"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
            reverseOrder={true}
          />
        </div>
        <div className="mt-10"></div>
        <TextImageRow
          title={t('jp_craftsmenship_header_1')}
          text={[t('jp_craftsmenship_text_1')]}
          images={[{ imageSrc: t('image_jp_worker_factory') }]}
          titleSize="text-3xl"
          textSize="text-md"
          textColour="text-gray-500"
          titleBold={true}
          titleCenter={false}
          textCenter={false}
          itemAlign="items-start"
        />
        <img src={t('image_woman_typing_banner')} className="w-full h-auto" />
        <HeaderSubtitleBlock
          title={t('unparallel_mobility_header_1')}
          textCenter={true}
          titleSize={'text-5xl'}
          titleBold={true}
        />
        <HeaderSubtitleBlock
          title={t('unparallel_mobility_subheader_1')}
          subtitle={[t('unparallel_mobility_text_1')]}
          textCenter={false}
          titleCenter={false}
          titleSize={'text-3xl'}
          titleBold={true}
        />
        <HeaderSubtitleBlock
          title={t('overwhelming_header_1')}
          textCenter={true}
          titleSize={'text-5xl'}
          titleBold={true}
        />
        <HeaderSubtitleBlock
          title={t('high_cap_bat_header_1')}
          subtitle={[t('high_cap_bat_text_1')]}
          textCenter={false}
          titleCenter={false}
          titleSize={'text-3xl'}
          titleBold={true}
        />

        <div className="flex flex-col w-5/6">
          <TextImageRow
            title={t('ac_adapter_header_1')}
            text={[t('ac_adapter_text_1')]}
            disclaimer={[t('ac_adapter_disclaimer_1')]}
            images={[{ imageSrc: t('image_charger') }]}
            titleSize="text-3xl"
            textSize="text-md"
            textColour="text-gray-500"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
          />
          <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-4">
            <HeaderSubtitleBlock
              title={t('quick_charge_header_1')}
              subtitle={[t('quick_charge_text_1')]}
              textCenter={false}
              titleCenter={false}
              titleSize={'text-2xl'}
              titleBold={true}
            />
            <HeaderSubtitleBlock
              title={t('smart_charge_header_1')}
              subtitle={[t('smart_charge_text_1')]}
              textCenter={false}
              titleCenter={false}
              titleSize={'text-2xl'}
              titleBold={true}
            />
          </div>
          <HeaderSubtitleBlock
            title={t('mu_mimo_header_1')}
            subtitle={[t('mu_mimo_text_1')]}
            disclaimer={[t('mu_mimo_disclaimer_1'), t('mu_mimo_disclaimer_2')]}
            textCenter={false}
            titleCenter={false}
            titleSize={'text-2xl'}
            titleBold={true}
          />
          <div className="mt-6"></div>
          <HeaderSubtitleBlock
            title={t('bluetooth_header_1')}
            subtitle={[t('bluetooth_text_1')]}
            textCenter={false}
            titleCenter={false}
            titleSize={'text-2xl'}
            titleBold={true}
          />
          <div className="mt-6"></div>
          <HeaderSubtitleBlock
            title={t('sensitive_antenna_header_1')}
            subtitle={[t('sensitive_antenna_text_1')]}
            textCenter={false}
            titleCenter={false}
            titleSize={'text-2xl'}
            titleBold={true}
          />
        </div>
        <div className="mt-4"></div>
        <img src={t('image_camera_laptop_banner')} className="w-full h-auto" />
        <div className="mt-4"></div>
        <HeaderSubtitleBlock
          title={t('ease_of_use_header_1')}
          titleCenter={true}
          titleSize={'text-5xl'}
          titleBold={true}
        />
        <TextImageRow
          title={t('ease_of_use_subheader_1')}
          text={[t('ease_of_use_text_1')]}
          images={[{ imageSrc: t('image_wide_comparison') }]}
          titleSize="text-3xl"
          textSize="text-md"
          textColour="text-gray-500"
          titleBold={true}
          titleCenter={false}
          textCenter={false}
        />
        <div className="mt-6"></div>
        <HeaderSubtitleBlock
          title={t('productivity_header_1')}
          titleCenter={true}
          titleSize={'text-5xl'}
          titleBold={true}
        />
        <div className="mt-6"></div>
        <div className="flex flex-col items-center">
          <TextImageRow
            title={t('touch_screen_header_1')}
            text={[t('touch_screen_text_1')]}
            disclaimer={[t('touch_screen_disclaimer_1')]}
            images={[{ imageSrc: t('image_stylus_on_laptop_screen') }]}
            titleSize="text-3xl"
            textSize="text-md"
            textColour="text-gray-500"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
          />
          <TextImageRow
            title={t('new_keyboard_header_1')}
            text={[t('new_keyboard_text_1'), t('new_keyboard_text_2')]}
            disclaimer={[t('new_keyboard_disclaimer_1')]}
            images={[{ imageSrc: t('image_typing_black_computer') }]}
            titleSize="text-3xl"
            textSize="text-md"
            textColour="text-gray-500"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
          />
          <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 gap-x-4 w-10/12 items-start">
            <div>
              <ImageTitleTextBlock
                imageSrc={t('image_hand_open_laptop')}
                title={t('one_hand_header_1')}
                subtitle={[t('one_hand_text_1')]}
                titleSize={'text-2xl'}
                titleBold={true}
                titleCenter={false}
              />
              <div className="-m-3" />
              <HeaderSubtitleBlock
                title={t('one_hand_subheader_1')}
                subtitle={[t('one_hand_text_2')]}
                titleCenter={false}
                titleSize={'text-2xl'}
                titleBold={true}
              />
            </div>
            <ImageTitleTextBlock
              imageSrc={t('image_collaborate_stylus_laptop')}
              title={t('lay_flat_hinge_header_1')}
              subtitle={[t('lay_flat_hinge_text_1')]}
              disclaimer={[t('lay_flat_hinge_disclaimer_1')]}
              titleSize={'text-2xl'}
              textCenter={false}
              titleCenter={false}
              titleBold={true}
            />
            <ImageTitleTextBlock
              imageSrc={t('image_keyboard_closeup_tilted')}
              title={t('dished_keycap_header_1')}
              subtitle={[t('lay_flat_hinge_text_1')]}
              titleSize={'text-2xl'}
              textCenter={false}
              titleCenter={false}
              titleBold={true}
            />
            <ImageTitleTextBlock
              imageSrc={t('image_black_laptop_right')}
              title={t('smudge_proof_header_1')}
              subtitle={[t('smudge_proof_text_1')]}
              titleSize={'text-2xl'}
              textCenter={false}
              titleCenter={false}
              titleBold={true}
            />
            <ImageTitleTextBlock
              imageSrc={t('image_black_laptop_keyboard')}
              title={t('backlit_keyboard_header_1')}
              subtitle={[t('backlit_keyboard_text_1')]}
              titleSize={'text-2xl'}
              textCenter={false}
              titleCenter={false}
              titleBold={true}
            />
            <ImageTitleTextBlock
              imageSrc={t('image_keyboard_closeup')}
              title={t('exclusive_font_header_1')}
              subtitle={[t('exclusive_font_text_1')]}
              titleSize={'text-2xl'}
              textCenter={false}
              titleCenter={false}
              titleBold={true}
            />
          </div>
        </div>
        <div className="-m-20"></div>
        <TextImageRow
          title={t('premium_webcam_header_1')}
          text={[t('premium_webcam_text_1')]}
          disclaimer={[t('premium_webcam_disclaimer_1')]}
          images={[{ imageSrc: t('image_camera_shutter_finger') }]}
          titleSize="text-3xl"
          textSize="text-md"
          textColour="text-gray-500"
          titleBold={true}
          titleCenter={false}
          textCenter={false}
        />
        <div className="mt-8"></div>
        <HeaderImageBlock
          title={t('crystal_clear_header_1')}
          topText={[t('crystal_clear_text_1')]}
          titleCenter={false}
          textCenter={false}
          textColour="text-gray-500"
          titleSize={'text-4xl'}
          imageSrc={t('image_man_woman_view')}
          imageWidthLarge="w-1/2"
          imageWidthSmall="w-10/12"
          titleBold={true}
        />
        <div className="mt-8 lg:mt-16"></div>
        <TextImageRow
          title={t('sign_in_fast_header_1')}
          text={[t('sign_in_fast_text_1')]}
          images={[{ imageSrc: t('image_windows_hello') }]}
          titleSize="text-3xl"
          textSize="text-md"
          textColour="text-gray-500"
          titleBold={true}
          titleCenter={false}
          textCenter={false}
        />
        <img src={t('image_finger_power_button')} className="w-full h-auto" />
        <div className="mt-8 lg:mt-12"></div>
        <HeaderSubtitleBlock
          title={t('multi_layer_header_1')}
          titleSize={'text-5xl'}
        />
        <div className="mt-8 lg:mt-12"></div>
        <HeaderSubtitleBlock
          title={t('seamless_login_header_1')}
          subtitle={[t('seamless_login_text_1')]}
          titleSize={'text-3xl'}
          titleCenter={false}
          textCenter={false}
          titleBold={true}
          subtitleColour="text-gray-500"
        />
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-10/12 gap-x-10 gap-y-4 mt-5">
          <ImageTitleTextBlock
            imageSrc={t('image_illustration_stare_lock')}
            title={t('buttonless_login_header_1')}
            subtitle={[t('buttonless_login_text_1')]}
            titleSize={'text-2xl'}
            subtitleSize="text-md"
            titleBold={true}
            titleCenter={false}
          />
          <ImageTitleTextBlock
            imageSrc={t('image_illustration_lock')}
            title={t('when_away_header_1')}
            subtitle={[t('when_away_text_1')]}
            titleSize={'text-2xl'}
            subtitleSize="text-md"
            titleBold={true}
            titleCenter={false}
          />
          <ImageTitleTextBlock
            imageSrc={t('image_illustration_10_min')}
            title={t('laptop_awake_header_1')}
            subtitle={[t('laptop_awake_text_1')]}
            titleSize={'text-2xl'}
            subtitleSize="text-md"
            titleBold={true}
            titleCenter={false}
          />
        </div>
        <TextImageRow
          title={t('bios_auth_header_1')}
          text={[t('bios_auth_text_1')]}
          disclaimer={[t('bios_auth_disclaimer_1')]}
          images={[{ imageSrc: t('image_password_auth') }]}
          titleSize="text-3xl"
          textSize="text-md"
          textColour="text-gray-500"
          titleBold={true}
          titleCenter={false}
          textCenter={false}
        />
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-10/12 gap-x-10 gap-y-4 mt-5">
          <HeaderSubtitleBlock
            title={t('bios_self_healing_header_1')}
            subtitle={[t('bios_self_healing_text_1')]}
            titleBold={true}
            titleSize="text-xl"
            subtitleSize="text-md"
            subtitleColour="text-gray-500"
            textCenter={false}
            titleCenter={false}
          />
          <HeaderSubtitleBlock
            title={t('trusted_platform_header_1')}
            subtitle={[t('trusted_platform_text_1')]}
            disclaimer={[
              t('trusted_platform_disclaimer_1'),
              t('trusted_platform_disclaimer_2'),
            ]}
            subtitleSize="text-md"
            titleBold={true}
            titleSize="text-xl"
            subtitleColour="text-gray-500"
            textCenter={false}
            titleCenter={false}
          />
          <HeaderSubtitleBlock
            title={t('bios_self_healing_header_1')}
            subtitle={[t('bios_self_healing_text_1')]}
            titleBold={true}
            titleSize="text-xl"
            subtitleSize="text-md"
            subtitleColour="text-gray-500"
            textCenter={false}
            titleCenter={false}
          />
        </div>
        <img src={t('image_gpu_banner')} className="w-full h-auto" />
        <div className="mt-10"></div>
        <HeaderSubtitleBlock
          title={t('no_compromise_header_1')}
          titleBold={true}
          titleSize="text-4xl"
          titleCenter={true}
        />
        <div className="mt-10"></div>
        <TextImageRow
          title={t('latest_os_header_1')}
          text={[t('latest_os_text_1')]}
          disclaimer={[t('latest_os_disclaimer_1')]}
          images={[{ imageSrc: t('image_windows_desktop') }]}
          titleSize="text-3xl"
          textSize="text-md"
          textColour="text-gray-500"
          titleBold={true}
          titleCenter={false}
          textCenter={false}
        />
        <TextImageRow
          title={t('intel_evo_header_1')}
          text={[t('intel_evo_text_1')]}
          disclaimer={[t('intel_evo_disclaimer_1')]}
          images={[{ imageSrc: t('image_intel_evo_logo') }]}
          titleSize="text-3xl"
          textSize="text-md"
          textColour="text-gray-500"
          titleBold={true}
          titleCenter={false}
          textCenter={false}
        />
        <div className="mt-10"></div>
        <HeaderSubtitleBlock
          title={t('unrivaled_performance_header_1')}
          titleBold={true}
          titleSize="text-4xl"
          titleCenter={true}
        />
        <div className="mt-10"></div>
        <TextImageRow
          title={t('lightweight_laptop_header_1')}
          text={[t('lightweight_laptop_text_1')]}
          images={[{ imageSrc: t('image_intel_core_i7_logo') }]}
          titleSize="text-3xl"
          textSize="text-md"
          textColour="text-gray-500"
          titleBold={true}
          titleCenter={false}
          textCenter={false}
        />
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center w-10/12">
          <TextImageRow
            title={t('gpu_performance_header_1')}
            text={[t('gpu_performance_text_1')]}
            disclaimer={[t('gpu_performance_disclaimer_1')]}
            images={[{ imageSrc: t('image_151_cpu') }]}
            titleSize="text-md"
            textSize="text-md"
            titleColour="text-sky-400"
            textColour="text-gray-500"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
            reverseOrder={true}
          />
          <TextImageRow
            title={t('gpu_performance_header_2')}
            text={[t('gpu_performance_text_2')]}
            disclaimer={[t('gpu_performance_disclaimer_2')]}
            images={[{ imageSrc: t('image_145_gpu') }]}
            titleSize="text-md"
            textSize="text-md"
            titleColour="text-sky-400"
            textColour="text-gray-500"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
            reverseOrder={true}
          />
        </div>
        <p className="w-3/4 text-sm text-gray-500">
          {t('gpu_performance_disclaimer_3')}
        </p>
        <div className="mt-10"></div>
        <div className="w-10/12 bg-slate-100">
          <TextImageRow
            title={t('vaio_true_performance_header_1')}
            text={[t('vaio_true_performance_text_1')]}
            images={[{ imageSrc: t('image_vaio_true_performance') }]}
            titleSize="text-3xl"
            textSize="text-md"
            textColour="text-gray-500"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
          />
        </div>
        <div className="mt-10"></div>
        <HeaderSubtitleBlock
          title={t('other_performance_header_1')}
          titleBold={true}
          titleSize="text-4xl"
          titleCenter={true}
        />
        <div className="mt-10"></div>
        <HeaderSubtitleBlock
          title={t('4th_gen_header_1')}
          subtitle={[t('4th_gen_text_1')]}
          disclaimer={[t('4th_gen_disclaimer_1')]}
          textCenter={false}
          titleCenter={false}
          titleBold={true}
          titleSize="text-3xl"
        />
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center w-10/12">
          <TextImageRow
            title={t('high_speed_ssd_header_1')}
            text={[t('high_speed_ssd_text_1')]}
            disclaimer={[t('high_speed_ssd_disclaimer_1')]}
            images={[{ imageSrc: t('image_ssd_332') }]}
            titleSize="text-md"
            textSize="text-md"
            titleColour="text-sky-400"
            textColour="text-gray-500"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
            reverseOrder={true}
          />
          <TextImageRow
            title={t('high_speed_ssd_header_2')}
            text={[t('high_speed_ssd_text_2')]}
            disclaimer={[t('high_speed_ssd_disclaimer_2')]}
            images={[{ imageSrc: t('image_ssd_238') }]}
            titleSize="text-md"
            textSize="text-md"
            titleColour="text-sky-400"
            textColour="text-gray-500"
            titleBold={true}
            titleCenter={false}
            textCenter={false}
            reverseOrder={true}
          />
        </div>
        <p className="w-3/4 text-sm text-gray-500">
          {t('high_speed_ssd_disclaimer_3')}
        </p>
        <div className="mt-10"></div>
        <HeaderSubtitleBlock
          title={t('high_speed_large_cap_header_1')}
          subtitle={[t('high_speed_large_cap_text_1')]}
          textCenter={false}
          titleCenter={false}
          titleBold={true}
          titleSize="text-3xl"
        />
        <div className="mt-10"></div>
        <HeaderImageBlock
          title={t('various_peripherals_header_1')}
          topText={[
            t('various_peripherals_text_1'),
            t('various_peripherals_text_2'),
          ]}
          textCenter={false}
          textColour={'text-gray-500'}
          titleCenter={false}
          titleBold={true}
          imageSrc={t('image_port_definition_en')}
        />
      </div>
      <div className="mb-10"></div>
      <div className=" bg-stone-100 text-gray-500 pt-6">
        <div className="ml-0 lg:ml-40 lg:w-2/3 w-full p-7 text-xs leading-relaxed gap-x-2">
          <p>{t('sx14_disclaimer_1')}</p>
          <p>{t('sx14_disclaimer_2')}</p>
          <p>{t('sx14_disclaimer_3')}</p>
          <p>{t('sx14_disclaimer_4')}</p>
          <p>{t('sx14_disclaimer_5')}</p>
          <p>{t('sx14_disclaimer_6')}</p>
          <p>{t('sx14_disclaimer_7')}</p>
        </div>
      </div>
    </div>
  );
}
