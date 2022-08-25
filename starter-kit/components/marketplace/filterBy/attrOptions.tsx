import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { ECollapseType } from '../../../../base/constants/common';
import { IAttributeItem } from '../../../../base/interfaces/collection';
import CheckedIcon from '../../shared/icons/checkedIcon';
import Collapse from '../../shared/collapse';
import { AttrsScroller, Attrs, Attr, AttrBtn, CheckBox, AttrLabel, AttrNumber } from './Styled';

interface AttrOptionsProps {
  title: string;
  items: IAttributeItem[];
  handleClick: (url: string) => void;
}

const AttrOptions: FC<AttrOptionsProps> = (props) => {
  const { title, items, handleClick } = props;

  const attrsEl = useMemo(() => {
    if (!items) {
      return <></>;
    }

    const data: unknown[] = [];

    items.map((item: IAttributeItem) => {
      const key = item.key;
      const isChecked = item.selected || false;
      const label = item.attr.attribute?.value || '';
      const count = item.attr.count || 0;
      const cls = isChecked ? 'selected' : '';
      const url = item?.url || '#';
      data.push(
        <Attr key={key}>
          <AttrBtn onClick={() => handleClick(url)}>
            <CheckBox className={cls}>{isChecked && <CheckedIcon />}</CheckBox>
            <AttrLabel>
              {label} <AttrNumber>({count})</AttrNumber>
            </AttrLabel>
          </AttrBtn>
        </Attr>
      );
    });
    return data;
  }, [items, handleClick]);

  return (
    <Collapse title={title} isOpen={false} type={ECollapseType.SECONDARY}>
      <AttrsScroller>
        <Attrs>{attrsEl}</Attrs>
      </AttrsScroller>
    </Collapse>
  );
};

export default observer(AttrOptions);
