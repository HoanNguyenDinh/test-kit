import { observer } from 'mobx-react';
import { FC, useMemo } from 'react';
import { useMatch } from 'react-router-dom';
import { EAppRoutes } from '../../../../base/constants/common';
import StaticLinks from './staticLinks';
import { Badge, Nav, NavItem, NavLinkTo } from './Styled';

interface NavItemsProps {
  showStaticNav?: boolean;
}

const NavItems: FC<NavItemsProps> = (props) => {
  const { showStaticNav } = props;
  const clsName = showStaticNav ? 'have-static-nav' : '';
  const clsHome = useMatch('/') ? 'active' : '';
  const clsMarketPlace = useMatch('/marketplace/:symbol') || clsHome !== 'active' ? 'active' : '';
  // const brandSymbol = commonStore.brandSymbol;

  const renderMarketLink = useMemo(() => {
    return (
      <NavLinkTo className={clsMarketPlace} href={EAppRoutes.MARKETPLACE} title={'Marketplace'}>
        Market
        <Badge>New</Badge>
      </NavLinkTo>
    );
  }, [clsMarketPlace]);

  return (
    <Nav className={clsName}>
      <NavItem className={clsHome}>
        <NavLinkTo className={clsHome} href={EAppRoutes.HOME} title={'Home'}>
          Home
        </NavLinkTo>
      </NavItem>
      <StaticLinks showStaticNav={showStaticNav} />
      <NavItem className={clsMarketPlace}>{renderMarketLink}</NavItem>
    </Nav>
  );
};

export default observer(NavItems);
