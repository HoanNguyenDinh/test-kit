import PageWrapper from '../../components/shared/pageWrapper';
import { ISEO } from '../../../base/interfaces/common';
import { Content } from './Styled';

const NotFound = () => {
  const seo: ISEO = {
    title: 'Not Found',
    description: 'Not Found',
    keywords: '',
    og: {
      title: 'Not Found',
      description: 'Not Found',
      image: ''
    }
  };

  return (
    <PageWrapper seo={seo} layout='not-found' className='not-found'>
      <Content>404 page not found</Content>
    </PageWrapper>
  );
};

export default NotFound;
