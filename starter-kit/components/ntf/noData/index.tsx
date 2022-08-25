import { Wrapper, Icon } from './Styled';

type INoDataPros = {
  text?: string;
};

const NoData = (props: INoDataPros) => {
  const { text } = props;
  return (
    <Wrapper>
      <Icon />
      {text ?? 'No data'}
    </Wrapper>
  );
};

export default NoData;
