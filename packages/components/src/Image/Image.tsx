import { bemJoin } from 'bem-join';
import React, { SyntheticEvent, useState } from 'react';

import './Image.scss';

const b = bemJoin('image');

interface Props {
  src: string;
  alt?: string;
  className?: string;
  isRounded?: boolean;
  imageFallback?: React.ReactNode;
  onLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
}

const Image = ({
  src,
  alt = '',
  className = '',
  isRounded = false,
  imageFallback,
  onLoad,
}: Props): JSX.Element => {
  const [fallback, setFallback] = useState(false);

  const onError = (): void => {
    setFallback(true);
  };

  const getFallback = (): JSX.Element => (imageFallback === undefined ? (
    <div
      className={`${b({
        rounded: isRounded,
        fallback: true,
      })} ${className}`}
    />
  ) : <>{imageFallback}</>);

  const isFullSrc = typeof src !== 'string' || (typeof src === 'string' && (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:') ||
    src.startsWith('/')
  ));

  return fallback
    ? getFallback()
    : (
      <img
        onLoad={onLoad}
        onError={onError}
        className={`${b({
          rounded: isRounded,
        })} ${className}`}
        src={isFullSrc ? src : `${process.env.MEDIA_BASEPATH}${src}`}
        alt={alt}
      />
    );
};

export default Image;
