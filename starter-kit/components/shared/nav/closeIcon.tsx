import { FC } from 'react';
import { observer } from 'mobx-react';
import { CloseNavIcon } from '../icons';
import { CloseBtn } from './Styled';

interface NavCloseIconProps {
  isOpen: boolean;
  handleToggle: (value: boolean) => void;
}

const NavCloseIcon: FC<NavCloseIconProps> = (props) => {
  const { isOpen, handleToggle } = props;

  const handleClick = () => {
    handleToggle(!isOpen);
  };

  return (
    <CloseBtn aria-label='Close Btn' onClick={handleClick}>
      <CloseNavIcon aria-label='Close Icon' />
    </CloseBtn>
  );
};

export default observer(NavCloseIcon);
