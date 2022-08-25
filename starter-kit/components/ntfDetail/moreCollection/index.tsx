import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import PreArrowIcon from '../../shared/icons/prevArrowIcon';
import NextArrowIcon from '../../shared/icons/nextArrowIcon';
import Collapse from '../../shared/collapse';
import { INTF } from '../../../../base/interfaces/collection';
import { EControllers } from '../../../../base/constants/common';
import { formatRoundPrice, formatToCurrency } from '../../../../base/utils/price.helper';
import { getImageUrl } from '../../../../base/utils/image.helper';
import NTFCard from '../../ntf/ntfCard';
import { MoreCollectionIcon } from '../../shared/icons/index';
import _ from 'lodash';
import { Content, Scroller, Item, ActionControls, ArrowBtn } from './Styled';

interface INTFMoreCollection {
  ntfs: INTF[] | null;
  mintAddress: string | undefined;
}

const NTFMoreCollection: FC<INTFMoreCollection> = (props) => {
  const { ntfs, mintAddress } = props;

  const renderNTFs = useMemo(() => {
    if (!ntfs || ntfs.length < 1) {
      return;
    }
    const data: unknown[] = [];
    let key = 0;
    ntfs.map((item: INTF) => {
      key++;

      const img = getImageUrl(item?.img, { w: 228, h: 228 });
      const url = EControllers.NTFDETAIL.replace(':mintAddress', item?.mintAddress) || '';
      const title = item?.title;
      const price = formatToCurrency(item?.price) || null;
      const moonrank = formatToCurrency(item?.rarity?.moonrank?.rank);
      const howrare = formatToCurrency(item?.rarity?.howrare?.rank);
      const symbol = item?.collectionName || '';
      const mintAddressItem = item?.mintAddress || '';
      const titleArr = _.split(item?.title, '#');
      const identify = titleArr.length > 0 ? titleArr[1] : '';
      const moonrankURL = EControllers.MOONRANKURL.replace(':symbol', symbol).replace(':mintAddress', mintAddressItem);
      const howrareURL = EControllers.HOWAREISURL.replace(':symbol', symbol.replace(/_/g, '')).replace(':identify', identify);

      const dataProps = {
        img,
        url,
        title,
        moonrank,
        howrare,
        moonrankURL,
        howrareURL,
        price
      };

      const isRender = mintAddress && mintAddress !== item.mintAddress;
      if (isRender) {
        data.push(
          <Item key={`collection-${key}`} className='ntf-item'>
            <NTFCard {...dataProps} />
          </Item>
        );
      }
    });
    return data;
  }, [ntfs, mintAddress]);

  if (!ntfs || ntfs.length < 1) {
    return <></>;
  }

  const handleScroll = (direction: number) => {
    const scrollEl = document.getElementById('scroll');
    const item = document.querySelector('#scroll .ntf-item:first-child');
    if (scrollEl && item) {
      const scrollLeft = scrollEl.scrollLeft;
      const itemWidth = item.clientWidth + 22;
      const far = itemWidth * direction;
      const pos = scrollLeft + far;
      scrollEl.scrollTo({
        left: pos,
        behavior: 'smooth'
      });
    }
    return;
  };

  return (
    <Collapse className='has-bold-title' title='More from this collection' icon={<MoreCollectionIcon />} isOpen={true}>
      <Content>
        <Scroller id='scroll'>{renderNTFs}</Scroller>
        <ActionControls>
          <ArrowBtn onClick={() => handleScroll(-1)} className='btn-prev'>
            <PreArrowIcon />
          </ArrowBtn>
          <ArrowBtn onClick={() => handleScroll(1)} className='btn-next'>
            <NextArrowIcon />
          </ArrowBtn>
        </ActionControls>
      </Content>
    </Collapse>
  );
};

export default observer(NTFMoreCollection);
