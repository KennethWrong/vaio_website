import HeaderSubtitleBlock from '../sx12/HeaderSubTitleBlock';

export default function ImageTitleTextBlock({
  title = '',
  subtitle = [],
  disclaimer = [],
  imageSrc = '',
  titleSize,
  subtitleSize,
  textCenter,
  titleCenter,
  subtitleColour,
  headerColour,
  titleBold,
  imageWidthLarge = 'w-full',
  imageWidthSmall = 'w-full',
}: {
  imageSrc?: string;
  title?: string;
  subtitle?: string[];
  disclaimer?: string[];
  titleSize?: string;
  textCenter?: boolean;
  titleCenter?: boolean;
  subtitleColour?: string;
  subtitleSize?: string;
  headerColour?: string;
  titleBold?: boolean;
  imageWidthLarge?: string;
  imageWidthSmall?: string;
}) {
  return (
    <div className="w-full flex flex-col items-center">
      {imageSrc.length > 0 ? (
        <img
          src={imageSrc}
          className={`lg:${imageWidthLarge} ${imageWidthSmall} h-auto`}
        />
      ) : (
        ''
      )}
      <HeaderSubtitleBlock
        title={title}
        subtitle={subtitle}
        disclaimer={disclaimer}
        titleSize={titleSize}
        subtitleSize={subtitleSize}
        textCenter={textCenter}
        titleCenter={titleCenter}
        subtitleColour={subtitleColour}
        headerColour={headerColour}
        titleBold={titleBold}
      />
    </div>
  );
}
