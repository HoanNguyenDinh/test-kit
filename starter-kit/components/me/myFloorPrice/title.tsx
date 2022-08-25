import { useState, useContext, useEffect, FC, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react';
import { IGroupMyItem } from '../../../../base/interfaces/collection';
import { formatPriceToSOL } from '../../../../base/utils/price.helper';
import { CollectionStoreContext } from '../../../../base/stores/collection';
import WalletAvatar from './walletAvatar';
import InfoItem from './infoItem';
import { PageTitle, Container, ColLeft, ColRight, List, Item, PriceIcon } from './Styled';
import _ from 'lodash';

interface MePageTitleProps {
  title: string;
}

const MePageTitle: FC<MePageTitleProps> = (props) => {
  const { title } = props;

  return <PageTitle>{title}</PageTitle>;
};

export default observer(MePageTitle);
