import { ISEO } from '../../../base/interfaces/common';
import PageWrapper from '../../components/shared/pageWrapper';
import Organization from '../../components/organization';

const HomePage = () => {
  const seo: ISEO = {
    title: 'Home',
    description: 'Starter Kit',
    keywords: '',
    og: {
      title: 'Home',
      description: 'Starter Kit',
      image: ''
    }
  };

  return (
    <PageWrapper seo={seo} layout='home' showRoadmapLinkOnFooter={true} showStaticNav={true}>
      <Organization />
    </PageWrapper>
  );
};

export default HomePage;
