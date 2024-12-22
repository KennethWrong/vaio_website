export default function ThreeBoxes({
  boxes,
  index,
}: {
  boxes: string[];
  index?: number;
}) {
  return (
    <div className="w-full">
      <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-3 lg:grid-rows-1 lg:grid-cols-3">
        {boxes.map((val, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-gray-500 px-5 py-12 border-2 border-gray-500 justify-center ${
              index != null && index == i
                ? 'bg-gray-600 text-white'
                : 'bg-slate-50'
            }`}
          >
            <h1 className="text-2xl text-center">{val}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
