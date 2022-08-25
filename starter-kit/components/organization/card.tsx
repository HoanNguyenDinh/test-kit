import { FC, useMemo } from 'react';
import Media from '../shared/media';
import {
  SkeletonImage,
  SkeletonName,
  SkeletonDescription,
  CardWrapper,
  CardLink,
  CardImage,
  CardInfo,
  CardTitle,
  CardDescription
} from './Styled';

interface CollectionCardPros {
  img?: string;
  url?: string;
  title?: string;
  description?: string;
  skeleton?: boolean;
}

const CollectionCard: FC<CollectionCardPros> = (props) => {
  const { img, url, title, description, skeleton } = props;

  const renderSkeleton = useMemo(() => {
    return (
      <CardWrapper className='no-hover'>
        <CardImage>
          <SkeletonImage animation='wave' variant='rectangular' width='100%' height='100%' />
        </CardImage>
        <CardInfo>
          <SkeletonName variant='rectangular' width='35%' />
          <SkeletonDescription variant='rectangular' width='85%' />
        </CardInfo>
      </CardWrapper>
    );
  }, []);

  const renderCard = useMemo(() => {
    if (!img || !title || !url) return <></>;
    return (
      <CardWrapper>
        <CardLink to={url} title={title}>
          <Media imgUrl={img || ''} alt={title || ''} />
          <CardInfo>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardInfo>
        </CardLink>
      </CardWrapper>
    );
  }, [img, title, url, description]);

  if (skeleton) {
    return renderSkeleton;
  }

  return <>{renderCard}</>;
};

export default CollectionCard;
