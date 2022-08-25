import { FC, useState, ReactNode, useMemo, useCallback } from 'react';
import { ECollapseType } from '../../../../base/constants/common';
import { Wrapper, Title, TitleBtn, Content, Count, ArrowIcon } from './Styled';
import { observer } from 'mobx-react';

interface CollapsePros {
  title: string;
  emptyTitle?: string;
  icon?: ReactNode;
  isOpen?: boolean;
  count?: number;
  children?: ReactNode;
  className?: string;
  type?: string;
}

const Collapse: FC<CollapsePros> = (props) => {
  const { title, emptyTitle, icon, isOpen = false, count = null, children, className = '', type = ECollapseType.PRIMARY } = props;
  const [isShow, setIsShow] = useState(isOpen);
  const cls = isShow ? 'show' : '';
  const titleBtn = count === null ? title : count ? title : emptyTitle;
  const haveCount = count && +count > 0;

  const handleClick = useCallback(() => {
    if (count === null || (count && +count > 0)) {
      setIsShow(!isShow);
    }
  }, [count, isShow]);

  const titleEl = useMemo(() => {
    return (
      <Title className={type}>
        <TitleBtn className={`${cls} ${type}`} onClick={handleClick}>
          {icon} {titleBtn} {haveCount ? <Count>({count})</Count> : ''}
          <ArrowIcon className={`${cls} ${type}`} />
        </TitleBtn>
      </Title>
    );
  }, [titleBtn, haveCount, count, cls, icon, type, handleClick]);

  const contentEl = useMemo(() => {
    return <Content className={`cl-content ${type}`}>{children}</Content>;
  }, [children, type]);

  return (
    <Wrapper className={`${className} ${cls} ${type}`}>
      {titleEl}
      {contentEl}
    </Wrapper>
  );
};

export default observer(Collapse);
