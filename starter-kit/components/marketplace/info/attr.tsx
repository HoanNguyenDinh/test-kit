import { FC, ReactNode } from 'react';
import { InfoWrapper, InfoLabel, InfoValue } from './Styled';

interface CollectionAttrProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

const CollectionAttr: FC<CollectionAttrProps> = (props) => {
  const { label, value, icon } = props;

  return (
    <InfoWrapper>
      <InfoLabel>{label}</InfoLabel>
      <InfoValue>
        {icon} {value}
      </InfoValue>
    </InfoWrapper>
  );
};

export default CollectionAttr;
