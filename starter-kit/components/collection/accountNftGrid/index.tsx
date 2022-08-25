import { useContext, useEffect, useState, FC } from 'react';
import { observer } from 'mobx-react';
import { INTF, IGroupMyItem } from '../../../../base/interfaces/collection';
import { IReviewDialog } from '../../../../base/interfaces/common';
import { CollectionStoreContext } from '../../../../base/stores/collection';
import GroupHeading from '../../me/groupHeading';
import NoData from '../../me/noData';
import NTFCard from '../accountNftCard';
import { Item, Wrapper, GridWrapper, GroupItems } from './Styled';

interface IAccountNtfGridPros {
  action: {
    text: string;
    handle: (item: IReviewDialog) => void;
  };
  children?: React.ReactNode;
}

const AccountNtfGrid: FC<IAccountNtfGridPros> = (props) => {
  const { children, action } = props;
  const collectionStore = useContext(CollectionStoreContext);
  const [myGroupItems, setGroupMyItems] = useState<IGroupMyItem[]>([]);

  useEffect(() => {
    const data: IGroupMyItem[] = collectionStore.groupMyItems;
    if (data && data.length > 0) {
      setGroupMyItems(data);
    }
  }, [collectionStore.groupMyItems]);

  if (!myGroupItems || myGroupItems.length < 1) {
    return (
      <Wrapper>
        <NoData />
      </Wrapper>
    );
  }

  if (!myGroupItems[0]?.items) {
    return (
      <Wrapper>
        <GroupItems className='group-items'>
          <GroupHeading skeleton={true} />
          <GridWrapper>
            {[...Array(1)].map((item: INTF, index: number) => (
              <Item key={`collection-${index}`}>
                <NTFCard skeleton={true} />
              </Item>
            ))}
          </GridWrapper>
        </GroupItems>
      </Wrapper>
    );
  }

  const isOneGroup = myGroupItems.length > 1 ? false : true;
  const classGroup = isOneGroup ? 'one-group' : '';

  return (
    <Wrapper>
      {myGroupItems.map((groupItem, index) => (
        <GroupItems key={`group-items-${index}`} className='group-items'>
          {!isOneGroup && <GroupHeading data={groupItem} />}
          <GridWrapper className={`grid ${classGroup}`}>
            {groupItem?.items &&
              groupItem?.items.length > 0 &&
              groupItem?.items.map((item: INTF, index: number) => (
                <Item key={`collection-${index}`}>
                  <NTFCard floorPrice={groupItem.floorPrice} data={item} action={action} />
                </Item>
              ))}
          </GridWrapper>
        </GroupItems>
      ))}
      {children}
    </Wrapper>
  );
};

export default observer(AccountNtfGrid);
