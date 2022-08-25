import { FC, ReactNode } from 'react';
import { observer } from 'mobx-react';
import { InfoWrapper, InfoLabel, InfoValue } from './Styled';

interface InfoItemProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

const InfoItem: FC<InfoItemProps> = (props) => {
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

export default observer(InfoItem);
