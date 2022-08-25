import { observer } from 'mobx-react';
import { FC } from 'react';
import { LoadingIcon, Wrapper } from './Styled';

const PageLoading: FC = () => {
  return (
    <Wrapper>
      <LoadingIcon />
    </Wrapper>
  );
};

export default observer(PageLoading);
