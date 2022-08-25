import { FC } from 'react';
import { Link } from './Styled';

export type ITearms = {
  text: string;
};

const Terms: FC<ITearms> = ({ text }) => {
  return (
    <>
      {`${text}, you agree to`}{' '}
      <Link href='https://magiceden.io/terms-of-service.pdf' target={'_blank'}>
        Terms of Service
      </Link>
    </>
  );
};

export default Terms;
