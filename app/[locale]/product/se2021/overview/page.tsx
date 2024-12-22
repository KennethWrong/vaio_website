import ProductBanner from '@/components/ProductBanner';
import Disclaimer from '@/components/se2021/disclaimer';
import Header4GridBlock from '@/components/se2021/Header4GridBlock';
import HeaderImageBlock from '@/components/se2021/HeaderImageBlock';
import HeaderTextCenterBlock from '@/components/se2021/HeaderTextCenterBlock';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('product.se2021');
  return (
    <div>
      <ProductBanner
        mobileImage={t('image_se2021_banner_sm')}
        desktopImage={t('image_se2021_banner_lg')}
        altText="se2021 banner"
      />
      <HeaderTextCenterBlock
        title={t('se2021_header_1')}
        paragraphs={[t('se2021_subheader_1'), t('se2021_subheader_2')]}
      />
      <HeaderImageBlock
        title={t('se2021_header_2')}
        imageSrc={t('image_se2021_computer_intel_core')}
        bottomText={[t('se2021_header_2_text_1'), t('se2021_header_2_text_2')]}
      />
      <div className="my-20"></div>
      <Header4GridBlock
        title={t('se2021_uncompromised_header_1')}
        topLeftImageSrc={t('image_se2021_mobile_conference')}
        topRightTitle={t('se2021_mobile_conference_subtitle_1')}
        topRightText={[t('se2021_mobile_conference_text_1')]}
        bottomRightImageSrc={t('image_se2021_uncompromising')}
        bottomLeftTitle={t('se2021_uncompromising_subtitle_1')}
        bottomLeftText={[t('se2021_uncompromising_text_1')]}
      />
      <div className="my-20"></div>
      <HeaderImageBlock
        title={t('se2021_security_header_1')}
        imageSrc={t('image_se2021_fingerprint_reader')}
        bottomText={[t('se2021_security_text_1'), t('se2021_security_text_2')]}
      />
      <div className="my-20"></div>
      <Header4GridBlock
        title={t('se2021_entertainment_header_1')}
        topLeftImageSrc={t('image_se2021_visual_treat')}
        topRightTitle={t('se2021_visual_treat_header_1')}
        topRightText={[t('se2021_visual_treat_text_1')]}
        bottomRightImageSrc={t('image_se2021_ssd')}
        bottomLeftTitle={t('se2021_ssd_header_1')}
        bottomLeftText={[t('se2021_ssd_text_1')]}
      />
      <div className="my-20"></div>
      <Header4GridBlock
        title={t('se2021_work_and_play_header_1')}
        topLeftImageSrc={t('image_se2021_versatile')}
        topRightTitle={t('se2021_versatile_connect_header_1')}
        topRightText={[t('se2021_versatile_connect_text_1')]}
        bottomRightImageSrc={t('image_se2021_ergonomic_hinge')}
        bottomLeftTitle={t('se2021_ergo_hinge_header_1')}
        bottomLeftText={[t('se2021_ergo_hinge_text_1')]}
      />
      <Header4GridBlock
        topLeftImageSrc={t('image_se2021_backlit_keyboard')}
        topRightTitle={t('se2021_backlit_keyboard_header_1')}
        topRightText={[t('se2021_backlit_keyboard_text_1')]}
        bottomRightImageSrc={t('image_se2021_premium_design')}
        bottomLeftTitle={t('se2021_prem_design_header_1')}
        bottomLeftText={[t('se2021_prem_design_text_1')]}
      />
      <Disclaimer />
    </div>
  );
}
