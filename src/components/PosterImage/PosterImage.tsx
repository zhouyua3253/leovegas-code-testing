import React from "react";
import Image, { ImageProps } from "next/image";

export interface PosterImageProps extends ImageProps {
  /**
   * Will automatically convert the relative path to absolute path.
   */
  src: string;
}

export default function PosterImage({
  src,
  alt,
  width = 500,
  height = 750,
  ...rest
}: PosterImageProps) {
  if (!src.startsWith("http")) {
    src = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${src}`;
  }

  return (
    <Image
      src={src}
      alt={alt}
      aria-label={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
}
