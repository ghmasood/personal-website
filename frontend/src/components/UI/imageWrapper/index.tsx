'use client';

import { useRef } from 'react';

import Image, { ImageProps } from 'next/image';

import clsx from 'clsx';

function ImageWrapper({ ...rest }: ImageProps) {
  //REF
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Image
      {...rest}
      alt={rest.alt}
      className={clsx(rest.className, 'opacity-0 transition-opacity duration-700')}
      ref={imgRef}
      onLoad={() => {
        imgRef.current?.classList.remove('opacity-0');
      }}
    />
  );
}

export default ImageWrapper;
