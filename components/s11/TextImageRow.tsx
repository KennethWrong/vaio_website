import Tag from './Tag';

export default function TextImageRow({
  tagText,
  title,
  text = [],
  images,
  reverseOrder = false,
  disclaimer = [],
  textColour = '',
  titleColour = '',
  titleSize = 'text-4xl',
  textSize = '',
  disclaimerTextColour = 'text-gray-500',
  titleCenter = true,
  textCenter = true,
  itemAlign = 'items-center',
  titleBold = false,
}: {
  tagText?: string;
  title?: string;
  text?: string[];
  images: { imageSrc: string; caption?: string }[];
  reverseOrder?: boolean;
  disclaimer?: string[];
  textColour?: string;
  titleColour?: string;
  titleSize?: string;
  textSize?: string;
  disclaimerTextColour?: string;
  textCenter?: boolean;
  itemAlign?: string;
  titleBold?: boolean;
  titleCenter?: boolean;
}) {
  return (
    <div
      className={`w-full flex lg:flex-row flex-col p-2 lg:${itemAlign} items-center justify-center`}
    >
      <div
        className={`flex flex-col w-full lg:w-5/6 items-center ${
          textCenter ? 'lg:text-center' : 'lg:text-left'
        } ${reverseOrder ? 'order-2' : 'order-1'}`}
      >
        {tagText ? <Tag text={tagText} /> : ''}
        {title ? (
          <h1
            className={`${titleSize} w-full text-center lg:w-3/4 mb-6 ${titleColour} ${
              titleCenter ? 'lg:text-center' : 'lg:text-left'
            } ${titleBold ? 'font-bold' : ''}`}
          >
            {title}
          </h1>
        ) : (
          ''
        )}
        {text.map((t, index) => (
          <p
            key={index}
            className={`items-center text-center ${
              textCenter ? 'lg:text-center' : 'lg:text-left'
            } w-3/4 mb-4 ${textColour} ${textSize} leading-relaxed`}
          >
            {t}
            <span>
              <br />
            </span>
          </p>
        ))}
        {disclaimer.map((k, i) => (
          <p
            key={i}
            className={`mb-1 items-center w-3/4 text-sm ${disclaimerTextColour} text-center lg:text-start`}
          >
            {k}
            <span>
              <br />
            </span>
          </p>
        ))}
      </div>
      <div
        className={`flex flex-row items-center w-full lg:w-5/6 py-10 justify-center ${
          reverseOrder ? 'order-1' : 'order-2'
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full lg:w-3/4 h-auto"
          >
            <img src={image.imageSrc} />
            <p className={`mt-2 ${textColour}`}>{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
