import { FC, useState, useContext } from 'react';
import { observer } from 'mobx-react';
import NavIcon from './navIcon';
import CloseIcon from './closeIcon';
import Logo from '../header/logo';
import NavItems from './navItems';
import ConnectWallet from './connectWallet';
import SocialLinks from './socialLinks';
import { NavWrapper, NavContent, NavActions } from './Styled';

interface NavProps {
  showStaticNav?: boolean;
}

const Nav: FC<NavProps> = (props) => {
  const { showStaticNav = false } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clsActive = isOpen ? 'active' : '';
  const clsName = showStaticNav ? 'have-static-nav' : '';

  const handleToggleNav = (value: boolean) => {
    setIsOpen(value);
    value ? document.body.classList.add('nav-open') : document.body.classList.remove('nav-open');
  };

  return (
    <NavWrapper className={clsName}>
      <NavIcon handleToggle={handleToggleNav} isOpen={isOpen} />
      <NavContent className={clsActive}>
        <NavActions>
          <Logo />
          <CloseIcon handleToggle={handleToggleNav} isOpen={isOpen} />
        </NavActions>
        <NavItems showStaticNav={showStaticNav} />
        <ConnectWallet />
        <SocialLinks />
      </NavContent>
    </NavWrapper>
  );
};

export default observer(Nav);
