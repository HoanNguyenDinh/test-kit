import { useContext, FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { IFamily } from '../../../base/interfaces/collection';
import { CommonStoreContext } from '../../../base/stores/common';
import { useOrganization } from '../../../base/hooks/useOrganization';
import CollectionList from './list';
import { Wrapper, Row, Title, PageTitle } from './Styled';

const Organization: FC = () => {
  const commonStore = useContext(CommonStoreContext);
  const creatorSymbol = commonStore.creator;
  const { org, isLoading } = useOrganization(creatorSymbol);
  const type = 'col';

  const renderFalilies = useMemo(() => {
    if (!org || !org.families || org.families.length < 1) return <></>;
    const data: unknown[] = [];
    let count = 0;
    org.families.map((item: IFamily) => {
      count++;
      const { name, collections } = item;
      const key = name.toLocaleLowerCase().replace(' ', '_');
      data.push(
        <Row key={`collection-row-${key}`} className={`row-${type}`}>
          {type !== 'col' && count === 1 && <PageTitle>{name} collections</PageTitle>}
          {type !== 'col' && count !== 1 && <Title>{name} collections</Title>}
          <CollectionList {...{ collections, isLoading, type }} />
        </Row>
      );
    });
    return data;
  }, [org, isLoading, type]);

  if (!org || !org.families || org.families.length < 1)
    return (
      <>
        <Wrapper>
          <Row>
            <CollectionList collections={[]} isLoading={true} type={type} />
          </Row>
        </Wrapper>
      </>
    );

  return (
    <>
      {type === 'col' && <PageTitle className={`title-${type}`}>Collections</PageTitle>}
      <Wrapper className={`wrapper-${type}`}>{renderFalilies}</Wrapper>
    </>
  );
};

export default observer(Organization);
