import { FC } from 'react';
import { IGroupMyItem } from '../../../../base/interfaces/collection';
import { formatPriceToSOL } from '../../../../base/utils/price.helper';
import { Floor, Image, ImageWrapper, Name, SkeletonImage, SkeletonName, Wrapper } from './Styled';

interface IGroupHeadingProps {
  data?: IGroupMyItem;
  skeleton?: boolean;
}

const GroupHeading: FC<IGroupHeadingProps> = (props) => {
  const { data, skeleton } = props;

  if (skeleton || !data) {
    return (
      <Wrapper>
        <ImageWrapper>
          <SkeletonImage animation='wave' variant='rectangular' width='100%' height='100%' />
        </ImageWrapper>
        <SkeletonName variant='rectangular' width='40%' />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ImageWrapper>
        <Image title={data?.collection?.name} src={data?.collection?.image} />
      </ImageWrapper>
      <Name>{data?.collection?.name}</Name>
      <Floor className='floor'>Floor: {formatPriceToSOL(data.floorPrice, 2)} SOL</Floor>
      <Floor>Total floor value: {formatPriceToSOL(data.items.length * data.floorPrice, 2)} SOL</Floor>
    </Wrapper>
  );
};

export default GroupHeading;
