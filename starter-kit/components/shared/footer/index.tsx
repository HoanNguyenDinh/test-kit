import { FC } from 'react';
import SteampunkGoogleIcon from '../../shared/icons/steampunkGoogleIcon';
import { EAppRoutes } from '../../../../base/constants/common';
import { FooterWrapper, Copyright, FooterRight, FooterRightContent, Title, TextTitle, Description, FooterContent, Link } from './Styled';

interface FooterPros {
  showRoadmapLinkOnFooter?: boolean;
}

const Footer: FC<FooterPros> = (props) => {
  const { showRoadmapLinkOnFooter = false } = props;

  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>
          © 2022, Starter Kit
          <br />
          Branch8
        </Copyright>
        {showRoadmapLinkOnFooter && (
          <FooterRight>
            <Link href={EAppRoutes.BLUEPRINT} target='_blank'>
              <FooterRightContent>
                <SteampunkGoogleIcon />
                <Title>
                  <TextTitle>BLUEPRINT→</TextTitle>
                </Title>
                <Description>Read our roadmap</Description>
              </FooterRightContent>
            </Link>
          </FooterRight>
        )}
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
