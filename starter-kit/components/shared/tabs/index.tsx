import { ReactNode, FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { Items, Item, Btn, Powered, TabWrapper } from './Styled';

export type TabItemType = {
  key: string | number;
  text: string | ReactNode;
  disabled?: boolean | undefined;
};

interface TabsProps {
  selectedTab: string | number;
  handleSelectedTab: (value: string | number) => void;
  items: TabItemType[];
}

const Tabs: FC<TabsProps> = (props) => {
  const { selectedTab, handleSelectedTab, items } = props;

  const itemsEl = useMemo(() => {
    if (!items) return <></>;
    const data: unknown[] = [];
    items.map((item: any) => {
      const cls = selectedTab === item.key ? 'active' : '';
      data.push(
        <Item key={`my-account-tab-item-${item.key}`} onClick={() => handleSelectedTab(item.key)}>
          <Btn className={cls} disabled={item.disabled ?? false}>
            {item.text}
          </Btn>
        </Item>
      );
    });
    return data;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  const poweredEl = useMemo(() => {
    return <Powered>Powered by MagicEden</Powered>;
  }, []);

  return (
    <TabWrapper>
      <Items>{itemsEl}</Items>
      {poweredEl}
    </TabWrapper>
  );
};

export default observer(Tabs);
