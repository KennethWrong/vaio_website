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
  titleSize = 'text-4xl',
  titleColour = '',
}: {
  topTag?: string;
  title?: string;
  imageSrc?: string;
  topText?: string[];
  topTextDisclaimer?: string;
  bottomText?: string[];
  bottomTextDisclaimer?: string;
  textCenter?: boolean;
  titleSize?: string;
  titleColour?: string;
}) {
  return (
    <div className="w-full flex flex-col items-center">
      {topTag ? <Tag text={topTag} /> : ''}
      <h1 className={`text-center ${titleSize} mb-5 ${titleColour}`}>
        {title}
      </h1>
      {topText.length > 0 ? (
        <div className={`w-1/2 my-5 ${textCenter ? 'text-center' : ''}`}>
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
        <img src={imageSrc} className="lg:w-3/4 w-1/2 h-auto"></img>
      ) : (
        ''
      )}
      {bottomText.length > 0 ? (
        <div className={`w-1/2 my-10 ${textCenter ? 'text-center' : ''}`}>
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
