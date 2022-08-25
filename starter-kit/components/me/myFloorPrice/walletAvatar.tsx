import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { AVATAR_LINK } from '../../../../base/constants/common';
import { getImageUrl } from '../../../../base/utils/image.helper';
import { ImageWrapper, ImageInner, Image } from './Styled';

interface WalletAvatarProps {
  walletAddress: string;
}

const WalletAvatar: FC<WalletAvatarProps> = (props) => {
  const { walletAddress } = props;
  const walletAvatar = useMemo(() => {
    const walletAvatarURL = AVATAR_LINK + '/' + (walletAddress === '' ? 'default.svg' : walletAddress + '.svg');
    return getImageUrl(walletAvatarURL, { w: 186, h: 186 });
  }, [walletAddress]);

  return (
    <ImageWrapper>
      <ImageInner>
        <Image src={walletAvatar} loading='lazy' alt={walletAddress} />
      </ImageInner>
    </ImageWrapper>
  );
};

export default observer(WalletAvatar);
