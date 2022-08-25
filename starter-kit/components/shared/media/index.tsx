import { observer } from 'mobx-react';
import { FC } from 'react';
import { SkeletonImage, Image, ImageInner, ImageWrapper } from './Styled';

interface MediaProps {
  imgUrl: string;
  alt: string;
}

const Media: FC<MediaProps> = (props) => {
  const { imgUrl, alt } = props;

  return (
    <ImageWrapper>
      <ImageInner>
        {imgUrl === '' ? (
          <SkeletonImage animation='wave' variant='rectangular' width='100%' height='100%' />
        ) : (
          <Image src={imgUrl} loading='lazy' alt={alt} />
        )}
      </ImageInner>
    </ImageWrapper>
  );
};

export default observer(Media);
