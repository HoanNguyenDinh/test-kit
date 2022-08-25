import { observer } from 'mobx-react';
import { useState } from 'react';
import PageWrapper from '../../components/shared/pageWrapper';
import NTFDetail from '../../components/ntfDetail';
import { ISEO } from '../../../base/interfaces/common';

const DetailsPage = () => {
  const [seo, setSeo] = useState<ISEO>({});

  return (
    <PageWrapper seo={seo} layout={`detail`}>
      <NTFDetail handleSetSeo={setSeo} />
    </PageWrapper>
  );
};

export default observer(DetailsPage);
