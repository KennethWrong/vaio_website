export default function Header4GridBlock({
  title,
  bottomRightImageSrc,
  topLeftImageSrc,
  topRightTitle = '',
  topRightText = [],
  bottomLeftTitle = '',
  bottomLeftText = [],
}: {
  title?: string;
  topLeftImageSrc: string;
  bottomRightImageSrc: string;
  topRightTitle?: string;
  topRightText?: string[];
  bottomLeftTitle?: string;
  bottomLeftText?: string[];
}) {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-center text-4xl lg:mb-20 mb-10">{title}</h1>
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-4 p-4 w-5/6 grid-cols-1 grid-rows-4">
        {/* Top Left: Image */}
        <div className="flex items-center justify-center">
          <img
            src={topLeftImageSrc}
            alt="Top Left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right: Text */}
        <div className="flex items-center justify-start p-4 flex-col leading-loose">
          <h1 className="text-3xl mt-5 lg:mt-16 mb-10">{topRightTitle}</h1>
          <div className="w-3/4">
            {topRightText.map((text, index) => (
              <>
                <p key={index} className="">
                  {text}
                </p>
                <br />
              </>
            ))}
          </div>
        </div>

        {/* Bottom Left: Text */}
        <div className="flex flex-col items-center justify-center p-4 order-4 lg:order-3">
          <h1 className="text-3xl mt-5 lg:mt-16 mb-10">{bottomLeftTitle}</h1>
          <div className="w-3/4">
            {bottomLeftText.map((text, index) => (
              <>
                <p key={index} className="">
                  {text}
                </p>
                <br />
              </>
            ))}
          </div>
        </div>

        {/* Bottom Right: Image */}
        <div className="flex items-center justify-center-100 order-3 lg:order-4">
          <img
            src={bottomRightImageSrc}
            alt="Bottom Right"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
