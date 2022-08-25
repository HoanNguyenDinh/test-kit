import { FC } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { EAppRoutes } from '../../../../base/constants/common';
import { useCollectionInfo } from '../../../../base/hooks/useCollectionInfo';
import { PoweredIcon } from '../../shared/icons';
import Nav from '../nav';
import Logo from './logo';
import { HeaderWrapper, LogoWrapper, PoweredLink } from './Styled';

interface HeaderProps {
  showStaticNav?: boolean;
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className, showStaticNav } = props;
  const { symbol } = useParams();
  const { collectionInfo } = useCollectionInfo(symbol);
  return (
    <HeaderWrapper className={className}>
      <LogoWrapper>
        <Logo skeleton={!collectionInfo}/>
        <PoweredLink href={EAppRoutes.POWEREDBY} target='_blank' title='MagicEden'>
          <PoweredIcon />
        </PoweredLink>
      </LogoWrapper>
      <Nav showStaticNav={showStaticNav} />
    </HeaderWrapper>
  );
};

export default observer(Header);
