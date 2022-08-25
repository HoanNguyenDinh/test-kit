import { FC, useMemo } from 'react';
import CollectionAttr from './attr';
import { List, Item, PriceIcon } from './Styled';

interface CollectionAttrsProps {
  floorPrice: number | string;
  totalVol: number | string;
  avgPrice24hr: number | string;
  listed: number | string;
  owners: number | string;
  totalSupply: number | string;
}

const CollectionAttrs: FC<CollectionAttrsProps> = (props) => {
  const { floorPrice, totalVol, avgPrice24hr, listed, owners, totalSupply } = props;

  const esrowEls = useMemo(() => {
    return (
      <>
        <Item>
          <CollectionAttr label='Floor' value={floorPrice} icon={<PriceIcon />} />
        </Item>
        <Item>
          <CollectionAttr label='Listed' value={listed} />
        </Item>
        <Item>
          <CollectionAttr label='Total Vol' value={totalVol} icon={<PriceIcon />} />
        </Item>
        <Item>
          <CollectionAttr label='Avg. Sale (24h)' value={avgPrice24hr} icon={<PriceIcon />} />
        </Item>
      </>
    );
  }, [floorPrice, listed, totalVol, avgPrice24hr]);

  const holderStatsEls = useMemo(() => {
    return (
      <>
        <Item>
          <CollectionAttr label='Owners' value={owners} />
        </Item>
        <Item>
          <CollectionAttr label='Total Supply' value={totalSupply} />
        </Item>
      </>
    );
  }, [owners, totalSupply]);

  return (
    <List>
      {esrowEls}
      {holderStatsEls}
    </List>
  );
};

export default CollectionAttrs;
