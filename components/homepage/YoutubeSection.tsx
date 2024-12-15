export const YoutubeSection = () => {
  return (
    <div className="py-16 w-full">
      <div className="container mx-auto px-4 text-center h-auto lg:w-3/5 w-full">
        <div className="relative overflow-hidden pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/PD7yvmUrYw0?si=THihIcw-ajC-Mtm5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;
