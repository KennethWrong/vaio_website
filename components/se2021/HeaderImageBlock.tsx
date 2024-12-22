import Tag from '../s11/Tag';

export default function HeaderImageBlock({
  topTag,
  title = '',
  imageSrc,
  topText = [],
  topTextDisclaimer = '',
  bottomText = [],
  bottomTextDisclaimer = '',
  textCenter = false,
  titleCenter = true,
  titleSize = 'text-4xl',
  subtitleSize = '',
  textColour = '',
  titleColour = '',
  imageWidthLarge = 'w-3/4',
  imageWidthSmall = 'w-1/2',
}: {
  topTag?: string;
  title?: string;
  imageSrc?: string;
  topText?: string[];
  topTextDisclaimer?: string;
  bottomText?: string[];
  bottomTextDisclaimer?: string;
  textCenter?: boolean;
  titleCenter?: boolean;
  titleSize?: string;
  subtitleSize?: string;
  textColour?: string;
  titleColour?: string;
  imageWidthLarge?: string;
  imageWidthSmall?: string;
}) {
  return (
    <div className="w-full flex flex-col items-center">
      {topTag ? <Tag text={topTag} /> : ''}
      <h1
        className={`${
          titleCenter ? 'lg:text-center' : 'lg:text-start'
        } ${titleSize} mb-5 ${titleColour} text-center`}
      >
        {title}
      </h1>
      {topText.length > 0 ? (
        <div
          className={`w-3/4 my-5 ${
            textCenter ? 'text-center' : ''
          } ${textColour} leading-loose ${subtitleSize}`}
        >
          {topText.map((text, index) => (
            <>
              <p key={index} className="">
                {text}
              </p>
              <br />
            </>
          ))}
        </div>
      ) : (
        ''
      )}
      {topTextDisclaimer ? <p className="text-xs">{topTextDisclaimer}</p> : ''}
      {imageSrc ? (
        <img
          src={imageSrc}
          className={`lg:${imageWidthLarge} ${imageWidthSmall} h-auto`}
        ></img>
      ) : (
        ''
      )}
      {bottomText.length > 0 ? (
        <div
          className={`w-3/4 my-10 ${
            textCenter ? 'text-center' : ''
          } ${textColour} ${subtitleSize}`}
        >
          {bottomText.map((text, index) => (
            <>
              <p key={index} className="">
                {text}
              </p>
              <br />
            </>
          ))}
        </div>
      ) : (
        ''
      )}
      {bottomTextDisclaimer ? (
        <p className="text-xs">{bottomTextDisclaimer}</p>
      ) : (
        ''
      )}
    </div>
  );
}
