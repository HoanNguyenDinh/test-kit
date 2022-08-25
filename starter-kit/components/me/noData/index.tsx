import { ReactNode } from 'react';
import { Wrapper, Icon, Title, Des } from './Styled';

type INoDataPros = {
  text?: string;
  title?: string;
  btn?: ReactNode;
};

const NoData = (props: INoDataPros) => {
  const { text, title, btn } = props;
  return (
    <Wrapper>
      <Icon />
      {title && <Title>{title}</Title>}
      <Des>{text || 'No data'}</Des>
      {btn}
    </Wrapper>
  );
};

export default NoData;
