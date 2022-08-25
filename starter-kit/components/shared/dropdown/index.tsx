import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { EDropdownType } from '../../../../base/constants/common';
import { Wrapper, Title, TitleInput, TitleIcon, ArrowIcon, Content } from './Styled';

type ICollapsePros = {
  selectedValue: string | number;
  children?: React.ReactNode;
  className?: string;
  isSelected: boolean;
  handleClick: () => void;
  type?: string;
};

const Dropdown = (props: ICollapsePros) => {
  const { selectedValue, children, className = '', type = EDropdownType.PRIMARY, isSelected, handleClick } = props;

  const cls = isSelected ? 'show' : '';

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      const refShare = e.target.closest('.dropdown');
      if (isSelected && !refShare) {
        handleClick();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  return (
    <Wrapper className={`dropdown ${className} ${cls} `}>
      <Title onClick={handleClick}>
        <TitleInput className={type} readOnly={true} value={selectedValue} />
        <TitleIcon className={type}>
          <ArrowIcon className={cls} />
        </TitleIcon>
      </Title>
      <Content className={`${type} ${cls}`}>{children}</Content>
    </Wrapper>
  );
};

export default observer(Dropdown);
