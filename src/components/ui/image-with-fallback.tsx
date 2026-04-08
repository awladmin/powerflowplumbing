'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc: string;
};

export function ImageWithFallback({ src, fallbackSrc, alt, ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
