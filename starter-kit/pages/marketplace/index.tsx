import { FC, useState } from 'react';
import PageWrapper from '../../components/shared/pageWrapper';
import CollectionListing from '../../components/marketplace';
import { ISEO } from '../../../base/interfaces/common';
import { observer } from 'mobx-react';

const MarketPlacePage: FC = () => {
  const [seo, setSeo] = useState<ISEO>({});

  return (
    <PageWrapper seo={seo} layout={`collection`}>
      <CollectionListing handleSetSeo={setSeo} />
    </PageWrapper>
  );
};

export default observer(MarketPlacePage);
