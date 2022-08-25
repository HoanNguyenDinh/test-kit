import { FC } from 'react';
import { observer } from 'mobx-react';
import LogoIcon from '../../../assets/icons/logo.svg';
import { LogoImg, LinkTo, SkeletonImage } from './Styled';
import { EAppRoutes } from '../../../../base/constants/common';

type ILogoPros = {
  skeleton?: boolean;
};

const Logo: FC<ILogoPros> = ({ skeleton }) => {
  return (
    <LinkTo href={EAppRoutes.HOME} title={'Home'}>
      {skeleton && <SkeletonImage animation='wave' variant='rectangular' width={100} height={60} />}
      {!skeleton && <LogoImg src={LogoIcon} alt='Logo' />}
    </LinkTo>
  );
};

export default observer(Logo);
