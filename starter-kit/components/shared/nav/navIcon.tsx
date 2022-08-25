import { FC } from 'react';
import { observer } from 'mobx-react';
import { NavBarIcon } from '../../shared/icons';
import { NavIconBtn } from './Styled';

interface NavIconProps {
  isOpen: boolean;
  handleToggle: (value: boolean) => void;
}

const NavIcon: FC<NavIconProps> = (props) => {
  const { isOpen, handleToggle } = props;

  const handleClick = () => {
    handleToggle(!isOpen);
  };

  return (
    <NavIconBtn onClick={handleClick}>
      <NavBarIcon />
    </NavIconBtn>
  );
};

export default observer(NavIcon);
