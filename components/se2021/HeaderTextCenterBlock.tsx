export default function HeaderTextCenterBlock({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="w-full flex flex-col items-center leading-loose text-gray-700">
      <div className="w-1/2 my-20">
        <h1 className="text-center text-4xl mb-5">{title}</h1>
        {paragraphs.map((text, index) => (
          <>
            <p key={index} className="">
              {text}
            </p>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
