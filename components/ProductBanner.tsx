import React from "react";

export default function ProductBanner({
  desktopImage,
  mobileImage,
  altText,
}: {
  desktopImage: string;
  mobileImage: string;
  altText: string;
}) {
  return (
    <section>
      <div className="w-full h-auto top-0 left-0 relative">
        <img
          className="hidden md:block w-full"
          src={desktopImage}
          alt={altText}
        />
        <img
          className="block md:hidden w-full"
          src={mobileImage}
          alt={altText}
        />
      </div>
    </section>
  );
}
