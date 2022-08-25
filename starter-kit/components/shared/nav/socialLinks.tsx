import { FC } from 'react';
import { observer } from 'mobx-react';
import InstagramIcon from '../../shared/icons/instagramIcon';
import TwitterIcon from '../../shared/icons/twitterIcon';
import DiscordIcon from '../../shared/icons/discordIcon';
import { Socials, SocialItem, SocialLink } from './Styled';
import { ESocialRoutes } from '../../../../base/constants/common';

const NavSocialLinks: FC = () => {
  return (
    <Socials>
      <SocialItem>
        <SocialLink href={ESocialRoutes.TWITTER} target={'_blank'} title={'Twitter'}>
          <TwitterIcon />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={ESocialRoutes.INSTAGRAM} target={'_blank'} title={'Instagram'}>
          <InstagramIcon />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={ESocialRoutes.DISCORD} target={'_blank'} title={'Discord'}>
          <DiscordIcon />
        </SocialLink>
      </SocialItem>
    </Socials>
  );
};

export default observer(NavSocialLinks);
