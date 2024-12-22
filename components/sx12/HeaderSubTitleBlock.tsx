import Tag from '../s11/Tag';

export default function HeaderSubtitleBlock({
  title = '',
  subtitle = [],
  disclaimer = [],
  topTag = '',
  titleSize = 'text-4xl',
  subtitleSize = 'text-lg',
  textCenter = false,
  titleCenter = true,
  subtitleColour = 'text-gray-500',
  headerColour = '',
}: {
  title?: string;
  subtitle?: string[];
  disclaimer?: string[];
  topTag?: string;
  titleSize?: string;
  textCenter?: boolean;
  titleCenter?: boolean;
  subtitleColour?: string;
  subtitleSize?: string;
  headerColour?: string;
}) {
  return (
    <div className="w-full flex flex-col items-center p-3">
      {topTag ? <Tag text={topTag} /> : ''}
      <h1
        className={`text-center ${
          titleCenter ? 'lg:text-center' : ' lg:text-start'
        } ${titleSize} mb-5 ${headerColour} lg:w-3/4 w-full leading-relaxed`}
      >
        {title}
      </h1>
      {subtitle.length > 0 ? (
        <div
          className={`w-full lg:w-3/4 mt-5 ${
            textCenter ? 'lg:text-center' : 'lg:text-start'
          } ${subtitleColour} text-center`}
        >
          {subtitle.map((text, index) => (
            <>
              <p key={index} className={`${subtitleSize}`}>
                {text}
              </p>
              <br />
            </>
          ))}
        </div>
      ) : (
        ''
      )}
      {disclaimer.length > 0 ? (
        <div
          className={`w-full lg:w-3/4 mt-1 ${
            textCenter ? 'text-center' : ''
          } ${subtitleColour} text-sm`}
        >
          {disclaimer.map((text, index) => (
            <>
              <p key={index} className={`text-sm`}>
                {text}
              </p>
              <br />
            </>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
