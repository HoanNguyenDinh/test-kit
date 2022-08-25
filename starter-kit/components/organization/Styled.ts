import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import { gridItemWrapper, gridItemName, collectionCard } from '../../theme/utility/mixin';
import mediaDevice from '../../theme/utility/mediaDevice';

export const Wrapper = styled.div`
  padding: 10px 0;

  &.wrapper-col {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin: 0px -10px;
    padding-top: 5px;
    justify-content: center;

    @media ${mediaDevice.md} {
      margin: 0px -26px;
    }
  }

  @media ${mediaDevice.lg} {
    padding: 50px 0;
  }
`;

export const Row = styled.div`
  // margin: 0 0 30px;

  &.row-col {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 10px;

    @media ${mediaDevice.xsm} {
      flex: 0 0 33.33%;
      width: 33.33%;
    }

    @media ${mediaDevice.md} {
      // flex: 0 0 33.33%;
      // width: 33.33%;
      padding: 0px 26px;
    }

    @media ${mediaDevice.lg} {
      flex: 0 0 25%;
      width: 25%;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0px -10px;
  padding-top: 5px;

  @media ${mediaDevice.md} {
    margin: 0px -26px;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  margin-bottom: 20px;

  @media ${mediaDevice.xsm} {
    flex: 0 0 50%;
    width: 50%;

    &.item-col {
      flex: 0 0 100%;
      width: 100%;
    }
  }

  @media ${mediaDevice.md} {
    flex: 0 0 33.33%;
    width: 33.33%;
    padding: 0px 26px;
    margin-bottom: 52px;
  }

  @media ${mediaDevice.lg} {
    flex: 0 0 25%;
    width: 25%;
  }
`;

export const PageTitle = styled.h1`
  ${collectionCard.title}
  &.title-col {
    text-align: center;
    margin: 60px 0 30px;
  }
`;

export const Title = styled.h2`
  ${collectionCard.title}
`;

//
// Card Item
//

export const SkeletonImage = styled(Skeleton).attrs({
  sx: {
    backgroundColor: 'rgba(68,68,68,1)',
    position: 'absolute'
  }
})`
  top: 0;
  left: 0;
`;

export const SkeletonName = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '14px'
  }
})`
  border-radius: 3px;
  margin: 10px 0;
`;

export const SkeletonDescription = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '10px'
  }
})`
  border-radius: 3px;
  margin: 0 0 10px;
`;

export const CardWrapper = styled.div`
  ${gridItemWrapper}
`;

export const CardLink = styled(Link)``;

export const CardInfo = styled.div`
  padding: var(--grid-item-info-padding);
`;

export const CardImage = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  text-align: center;
  font-size: 0;
  line-height: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 100%;
  margin: var(--grid-item-img-margin);
  width: var(--grid-item-img-width);
  border-radius: var(--grid-item-radius) var(--grid-item-radius) 0 0;
`;

export const CardTitle = styled.h3`
  ${gridItemName}
  font-weight: 600;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardDescription = styled.p`
  ${collectionCard.description}
`;
