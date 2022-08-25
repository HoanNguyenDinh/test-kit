import { FC } from 'react';
import InstagramIcon from '../../shared/icons/instagramIcon';
import TwitterIcon from '../../shared/icons/twitterIcon';
import DiscordIcon from '../../shared/icons/discordIcon';
import WatchIcon from '../../shared/icons/watchIcon';
import { SocialWrapper, Socials, SocialItem, SocialLink, TitleTooltip, WatchItem, WatchBtn, NumberItem } from './Styled';

interface CollectionSocialsProps {
  watch: number | string;
  instagramUrl: string;
  twitterUrl: string;
  discordUrl: string;
}

const CollectionSocials: FC<CollectionSocialsProps> = (props) => {
  const { watch, instagramUrl, twitterUrl, discordUrl } = props;

  return (
    <SocialWrapper>
      <WatchItem>
        {/* <TitleTooltip title='Watch' placement='top'>
          <WatchBtn>
            <WatchIcon aria-label='Watch' />
            Watch
            <NumberItem>{watch}</NumberItem>
          </WatchBtn>
        </TitleTooltip> */}
      </WatchItem>
      <Socials>
        <SocialItem>
          <TitleTooltip title='Twitter' placement='top'>
            <SocialLink href={twitterUrl} target='_blank'>
              <TwitterIcon aria-label='Twitter' />
            </SocialLink>
          </TitleTooltip>
        </SocialItem>
        <SocialItem>
          <TitleTooltip title='Instagram' placement='top'>
            <SocialLink href={instagramUrl} target='_blank'>
              <InstagramIcon aria-label='Instagram' />
            </SocialLink>
          </TitleTooltip>
        </SocialItem>
        <SocialItem>
          <TitleTooltip title='Discord' placement='top'>
            <SocialLink href={discordUrl} target='_blank'>
              <DiscordIcon aria-label='Discord' />
            </SocialLink>
          </TitleTooltip>
        </SocialItem>
      </Socials>
    </SocialWrapper>
  );
};

export default CollectionSocials;
