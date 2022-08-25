import { FC } from 'react';
import { Wrapper, Tabs, Tab, TabItem } from './Styled';

type IFilterTabsProps = {
  tabsItems: string[];
  selectedTab: string;
  handleChangeFilter: (value: string) => void;
};

const FilterTabs: FC<IFilterTabsProps> = (props) => {
  const { tabsItems, selectedTab, handleChangeFilter } = props;

  return (
    <Wrapper>
      <Tabs>
        {tabsItems.map((item: string, index) => (
          <Tab key={`tab-item-${index}`} className={selectedTab === item ? 'active' : ''}>
            <TabItem onClick={() => handleChangeFilter(item)} className={selectedTab === item ? 'active' : ''}>
              {item}
            </TabItem>
          </Tab>
        ))}
      </Tabs>
    </Wrapper>
  );
};

export default FilterTabs;
