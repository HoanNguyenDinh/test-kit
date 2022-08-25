import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { ISEO } from '../../../../base/interfaces/common';
import faviconImage from '../../../assets/images/favicon.jpg';

interface LayoutPros {
  seo?: ISEO;
  children?: React.ReactNode;
}

const Layout: FC<LayoutPros> = (props) => {
  const { seo, children } = props;

  return (
    <>
      <Helmet>
        <title>{seo?.title || 'Starter Kit'}</title>
        <link rel='icon' href={faviconImage} key='favicon' />
        {seo?.keywords && <meta name='keywords' content={seo.keywords} />}
        {seo?.description && <meta name='description' content={seo.description} />}
        {seo?.og?.title && <meta property='og:title' content={seo?.og?.title} />}
        {seo?.og?.description && <meta property='og:description' content={seo?.og?.description} />}
        {seo?.og?.image && <meta property='og:image' content={seo?.og?.image} />}
      </Helmet>
      <React.StrictMode>{children}</React.StrictMode>
    </>
  );
};

export default Layout;
