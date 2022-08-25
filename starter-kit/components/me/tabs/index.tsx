import _ from 'lodash';
import { ReactElement, FC, ReactNode, useMemo } from 'react';
import { Wrapper } from './Styled';
import { Items, Item, Btn } from './Styled';

type TabsProps = {
  items: string[];
  selectedTab: number;
  isTabChange: boolean;
  children: ReactElement[];
  onClick: (index: number) => void;
  className?: string;
};

const Tabs: FC<TabsProps> = (props) => {
  const { items, selectedTab, isTabChange, children, className, onClick } = props;

  // const childrens = useMemo(() => {
  //   return _.map(children, (item) => item);
  // }, [children]);

  return (
    <Wrapper className={className}>
      <Items>
        {items.map((item: string, index: number) => (
          <Item key={`my-account-tab-item-${index}`}>
            <Btn onClick={() => onClick(index)} className={selectedTab === index ? 'active' : ''}>
              {item}
            </Btn>
          </Item>
        ))}
      </Items>
      {!isTabChange ? children : children[selectedTab]}
    </Wrapper>
  );
};

export default Tabs;
