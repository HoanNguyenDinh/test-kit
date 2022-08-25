import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbWrapper } from './Styled';
import { DropLeftIcon } from '../../shared/icons';

type BreadcrumbsProps = {
  href: string;
  title: string;
};

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { href, title } = props;

  return (
    <BreadcrumbWrapper>
      <Link to={href}>
        <DropLeftIcon />
        {title}
      </Link>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumbs;
