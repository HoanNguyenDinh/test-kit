import { FC, ReactNode } from 'react';
import { observer } from 'mobx-react';
import { Wrapper, ContentWrapper } from './Styled';
import { ISEO } from '../../../../base/interfaces/common';
import Layout from '../layout';
import Header from '../header';
import Footer from '../footer';

interface PageWrapperPros {
  seo?: ISEO;
  layout?: string;
  showRoadmapLinkOnFooter?: boolean;
  showStaticNav?: boolean;
  className?: string;
  children?: ReactNode;
}

const PageWrapper: FC<PageWrapperPros> = (props) => {
  const { seo, layout, className = '', showRoadmapLinkOnFooter, showStaticNav, children } = props;

  return (
    <Wrapper className={layout}>
      <Layout seo={seo}>
        <Header className={`${layout} ${className}`} showStaticNav={showStaticNav} />
        <ContentWrapper className={`${layout} ${className}`}>{children}</ContentWrapper>
        <Footer showRoadmapLinkOnFooter={showRoadmapLinkOnFooter} />
      </Layout>
    </Wrapper>
  );
};

export default observer(PageWrapper);
