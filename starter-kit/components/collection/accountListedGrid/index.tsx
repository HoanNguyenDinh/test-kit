import { useContext, useEffect, useState, FC } from 'react';
import { observer } from 'mobx-react';
import { INTF, IGroupMyItem } from '../../../../base/interfaces/collection';
import { IReviewDialog } from '../../../../base/interfaces/common';
import { CollectionStoreContext } from '../../../../base/stores/collection';
import GroupHeading from '../../me/groupHeading';
import NoData from '../../me/noData';
import NTFCard from '../accountNftCard';
import { Item, Wrapper, GroupItems, GridWrapper } from './Styled';

type IAccountListedGridPros = {
  children?: React.ReactNode;
  action: {
    text: string;
    handle: (item: IReviewDialog) => void;
  };
};

const AccountListedGrid: FC<IAccountListedGridPros> = (props) => {
  const { children, action } = props;
  const collectionStore = useContext(CollectionStoreContext);
  const [myGroupItems, setGroupMyItems] = useState<IGroupMyItem[]>([]);

  useEffect(() => {
    const data: IGroupMyItem[] = collectionStore.groupMyItemsListed;
    if (data && data.length > 0) {
      setGroupMyItems(data);
    }
  }, [collectionStore.groupMyItemsListed]);

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
        <GroupItems key={`group-items-listed-${index}`} className='group-items'>
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

export default observer(AccountListedGrid);
