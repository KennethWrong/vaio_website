import Tag from './Tag';

export default function TitleTextImageBackgroundBlock({
  backgroundImgSrc,
  title,
  tagText,
  text = [],
  disclaimer = [],
  bgColour = '',
  height = '',
  textColour = 'text-white',
}: {
  backgroundImgSrc: string;
  title: string;
  tagText?: string;
  text: string[];
  disclaimer?: string[];
  bgColour?: string;
  height?: string;
  textColour?: string;
}) {
  return (
    <div
      className={`py-16 w-full flex flex-col bg-cover bg-center items-center px-3 ${bgColour} ${height}`}
      style={{ backgroundImage: `url('${backgroundImgSrc}')` }}
    >
      <div className="w-full flex flex-col items-center justify-center content-center px-2">
        {tagText ? <Tag text={tagText} /> : ''}
        <h1
          className={`text-center text-4xl mb-5 lg:w-5/6 leading-relaxed ${textColour}`}
        >
          {title}
        </h1>
        <div
          className={`lg:w-4/6 w-full my-5 text-lg text-center ${textColour}`}
        >
          {text.map((k, i) => (
            <p key={i} className="mb-1">
              {k}
              <span>
                <br />
              </span>
            </p>
          ))}
        </div>
        {disclaimer.map((k, i) => (
          <p key={i} className="mb-1">
            {k}
            <span>
              <br />
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
