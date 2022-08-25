import { FC, useMemo, useEffect } from 'react';
import { observer } from 'mobx-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { INTFAttribute, INTFStats } from '../../../../base/interfaces/collection';
import { formatTimeHatchingCooldown } from '../../../../base/utils/time.helper';
import Collapse from '../../shared/collapse';
import { AttributeIcon } from '../../shared/icons/index';
import { useCopyOnNTFAttrs } from '../../../../base/hooks/useCopyToClipboard';
import _ from 'lodash';
import { Attribute, Content, Copy, Copyied, List, Item, Label, LineBetween, Rarity, Value } from './Styled';

export type ICustomAttribute = {
  key: string;
  label: string;
  value: string;
};

interface NTFAttributesProps {
  attributes: INTFAttribute[] | null;
  ntfStats: INTFStats | null;
  customAttrs: any[] | null;
}

const NTFAttributes: FC<NTFAttributesProps> = (props) => {
  const { attributes, ntfStats, customAttrs } = props;
  const { copied, handleCopy } = useCopyOnNTFAttrs();

  const attrEls = useMemo(() => {
    if (!attributes || attributes.length < 1 || !ntfStats) {
      return <></>;
    }
    const data: unknown[] = [];
    attributes.map((attr: INTFAttribute) => {
      const traitType = attr?.trait_type;
      const key = traitType.replace(/ /g, '').toLowerCase();
      let value = attr?.value || '';
      value = typeof value === 'number' ? value.toString() : value;
      const isCopied = copied?.key === key;
      const totalMints = ntfStats?.totalMints || 1;
      const valueCount = ntfStats?.attrs ? _.find(ntfStats.attrs, (x) => x.trait_type === traitType)?.valueCount : 0;
      const rarity = valueCount ? ((valueCount / totalMints) * 100).toFixed(0) + '% have this trait' : '';

      data.push(
        <Item key={`attribute-${key}`}>
          <Attribute className={`copiedAttr${key}`}>
            <CopyToClipboard text={value} onCopy={() => handleCopy(key)}>
              {isCopied ? <Copyied /> : <Copy />}
            </CopyToClipboard>
            <Label title={traitType}>{traitType}</Label>
            <LineBetween>
              <Value title={value}>{value}</Value>
              <Rarity>{rarity}</Rarity>
            </LineBetween>
          </Attribute>
        </Item>
      );
    });
    return data;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes, ntfStats, copied]);

  const customAttrEls = useMemo(() => {
    if (!customAttrs || customAttrs.length < 1) {
      return <></>;
    }
    const ignoreAttrs = ['mint', 'collection'];
    const checkHatchingCooldown = 'hatchingCooldown';
    const data: unknown[] = [];
    const attrs: ICustomAttribute[] = [];

    _.forEach(customAttrs[0], (value, key) => {
      const check = _.includes(ignoreAttrs, key);
      const isHatchingCooldown = key === checkHatchingCooldown;
      if (!check) {
        attrs.push({
          key: key,
          label: key.replace(/([A-Z])/g, ' $1'),
          value: isHatchingCooldown ? formatTimeHatchingCooldown(value) : value
        });
      }
    });

    attrs.map((attr: ICustomAttribute) => {
      const key = attr.key;
      const label = attr.label;
      const value = attr.value;
      const isCopied = copied?.key === key;

      data.push(
        <Item key={`attribute-${key}`}>
          <Attribute className={`copiedAttr${key}`}>
            <CopyToClipboard text={value} onCopy={() => handleCopy(key)}>
              {isCopied ? <Copyied /> : <Copy />}
            </CopyToClipboard>
            <Label>{label}</Label>
            <LineBetween>
              <Value>{value}</Value>
            </LineBetween>
          </Attribute>
        </Item>
      );
    });
    return data;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customAttrs, copied]);

  return (
    <Collapse title='Attributes' icon={<AttributeIcon />} isOpen={true}>
      <Content>
        <List>
          {attrEls}
          {customAttrEls}
        </List>
      </Content>
    </Collapse>
  );
};

export default observer(NTFAttributes);
