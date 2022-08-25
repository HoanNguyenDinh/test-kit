import PageWrapper from '../../components/shared/pageWrapper';
import MeListings from '../../components/me';
import { ISEO } from '../../../base/interfaces/common';

const MeContainer = () => {
  const seo: ISEO = {
    title: 'NTF Marketplace',
    description: 'NTF Marketplace',
    keywords: '',
    og: {
      title: 'NTF Marketplace',
      description: 'NTF Marketplace',
      image: ''
    }
  };

  return (
    <PageWrapper seo={seo} layout='me'>
      <MeListings />
    </PageWrapper>
  );
};

export default MeContainer;
