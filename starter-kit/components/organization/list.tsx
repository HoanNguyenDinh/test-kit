import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { ICollectionInfo } from '../../../base/interfaces/collection';
import { getImageUrl } from '../../../base/utils/image.helper';
import CollectionCard from './card';
import { List, Item } from './Styled';
import NoData from '../ntf/noData';

interface CollectionListProps {
  isLoading: boolean;
  collections: ICollectionInfo[];
  type?: string;
}

const CollectionList: FC<CollectionListProps> = (props) => {
  const { isLoading, collections, type } = props;

  const renderList = useMemo(() => {
    if (!collections) return <NoData />;
    const data: unknown[] = [];
    collections.map((item: ICollectionInfo) => {
      const { name, image, description, symbol } = item;
      const cardProps = {
        title: name,
        description,
        url: `/marketplace/${symbol}`,
        img: getImageUrl(image, { w: 228, h: 228 })
      };
      data.push(
        <Item key={`collection-skeleton-${symbol}`} className={`item-${type}`}>
          <CollectionCard {...cardProps} />
        </Item>
      );
    });
    return <List className={`list-${type}`}>{data}</List>;
  }, [collections, type]);

  const renderSkeleton = useMemo(() => {
    return (
      <List>
        {[...Array(4)].map((item, index) => (
          <Item key={`collection-skeleton-${index}`} className='item-loading'>
            <CollectionCard skeleton={true} />
          </Item>
        ))}
      </List>
    );
  }, []);

  if (isLoading) {
    return <>{renderSkeleton}</>;
  }

  return <>{renderList}</>;
};

export default observer(CollectionList);
