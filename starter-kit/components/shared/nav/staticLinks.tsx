import { FC } from 'react';
import { observer } from 'mobx-react';
import { NavItem, NavLinkTo, Badge } from './Styled';
import { EAppRoutes } from '../../../../base/constants/common';

interface NavStaticLinksProps {
  showStaticNav?: boolean;
}

export type StaticLinkType = {
  key: string;
  url: string;
  title: string;
  target?: string;
  disabled?: boolean;
  badge?: boolean;
};

const NavStaticLinks: FC<NavStaticLinksProps> = (props) => {
  const { showStaticNav = false } = props;

  const staticLinks: StaticLinkType[] = [
    {
      key: 'coins',
      url: EAppRoutes.COINS,
      title: 'Coins',
      badge: true
    },
    {
      key: 'collections',
      url: EAppRoutes.HOME,
      title: 'Collections'
    },
    {
      key: 'park',
      url: EAppRoutes.PARK,
      title: 'Park'
    },
    {
      key: 'manifesto',
      url: EAppRoutes.MANIFESTO,
      title: 'Manifesto'
    },
    {
      key: 'blueprint',
      url: EAppRoutes.BLUEPRINT,
      title: 'Blueprint'
    },
    {
      key: 'shop',
      url: EAppRoutes.SHOP,
      title: 'Shop'
    }
  ];

  return (
    <>
      {showStaticNav &&
        staticLinks.map(({ key, url, title, badge, disabled, target }) => (
          <NavItem key={`nav-item-${key}`}>
            <NavLinkTo href={url} target={target} title={title} className={`${disabled ? 'disabled' : ''}`}>
              {title}
              {badge && <Badge>New</Badge>}
            </NavLinkTo>
          </NavItem>
        ))}
    </>
  );
};

export default observer(NavStaticLinks);
