import { FC } from 'react';
import { observer } from 'mobx-react';
import { EMyListingTabs } from '../../../base/constants/collection';
import { useMe } from '../../../base/hooks/collection/me';
import AccountListedGrid from '../collection/accountListedGrid';
import AccountNftGrid from '../collection/accountNftGrid';
import Activites from './activites';
import OfferMade from './offersMade';
import OfferReceived from './offersReceived';
import SelectedItems from './selectedItems';
import ReviewDialog from './reviewDialog';
import { TabItem } from './tabs/Styled';
import Tabs from './tabs';

export const MY_LISTING_TABS = [
  EMyListingTabs.MYNFTS,
  EMyListingTabs.LISTEDITEMS,
  EMyListingTabs.OFFERMADE,
  EMyListingTabs.OFFERRECEIVED,
  EMyListingTabs.ACTIVITIES
];

interface MeTabItemsProps {
  symbols: string[];
}

const MeTabItems: FC<MeTabItemsProps> = ({ symbols }) => {
  const {
    openSelectedItems,
    openReviewDialog,
    selectedTab,
    isTabChange,
    tabAction,
    items,
    selectedItems,
    updatedItems,
    messages,
    handleChangeTab,
    handleClick,
    handleAction,
    handleCancel,
    handleReviewAction,
    handleReviewClose,
    handleUpdate,
    handleContinueToListing
  } = useMe(symbols);

  return (
    <>
      <Tabs items={MY_LISTING_TABS} selectedTab={selectedTab} isTabChange={isTabChange} onClick={handleChangeTab}>
        <TabItem className={selectedTab === 0 ? 'selected' : ''}>
          <AccountNftGrid action={{ text: 'List Bear', handle: handleClick }} />
        </TabItem>
        <TabItem className={selectedTab === 1 ? 'selected' : ''}>
          <AccountListedGrid action={{ text: 'Update Bear', handle: handleClick }} />
        </TabItem>
        <TabItem className={selectedTab === 2 ? 'selected' : ''}>
          <OfferMade onClick={handleClick} symbols={symbols} />
        </TabItem>
        <TabItem className={selectedTab === 3 ? 'selected' : ''}>
          <OfferReceived symbols={symbols} />
        </TabItem>
        <TabItem className={selectedTab === 4 ? 'selected' : ''}>
          <Activites />
        </TabItem>
      </Tabs>
      <SelectedItems
        title={tabAction.selectedTitle}
        open={openSelectedItems}
        items={selectedItems}
        action={{ text: tabAction.selectedBtnText, handle: handleAction }}
        handleCancel={handleCancel}
      />
      <ReviewDialog
        title={tabAction.reviewTitle}
        action={{
          completeText: tabAction.reviewBtnCompleteText,
          progressText: tabAction.reviewBtnProgressText,
          defaultText: tabAction.reviewBtnDefaultText,
          handle: handleReviewAction
        }}
        handleClose={handleReviewClose}
        open={openReviewDialog}
        items={items}
        updatedItems={updatedItems}
        messages={messages}
        type={tabAction.actionType}
        handleContinueToListing={handleContinueToListing}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default observer(MeTabItems);
