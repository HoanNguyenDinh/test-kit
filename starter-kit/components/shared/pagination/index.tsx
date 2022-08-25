import { FC, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import Dropdown from '../dropdown';
import { SelectedIcon, SelectIcon } from '../../shared/icons/index';
import {
  Wrapper,
  PerPage,
  PerPageItem,
  PerPageList,
  PerPageWrapper,
  PgAction,
  PgActions,
  PgGoToPage,
  PgGoToPageInput,
  PgPageItem,
  PgText
} from './Styled';

interface PaginationPros {
  perPage: number[];
  total: number;
  currentPage: number;
  selectedPerPage: number;
  goToPage: number;
  handleChangeCurrentPage: (value: number) => void;
  handleChangeSelectedPerPage: (value: number) => void;
  className?: string;
}

const Pagination: FC<PaginationPros> = (props) => {
  const { perPage, total, currentPage, selectedPerPage, goToPage, handleChangeCurrentPage, handleChangeSelectedPerPage, className } = props;
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const pages = useMemo(() => {
    if (total > 0) {
      return Math.ceil(total / selectedPerPage);
    }
    return 1;
  }, [total, selectedPerPage]);

  const handleChangePage = (e: any) => {
    const val = +e.target.value;
    if (val !== 0 && val <= pages) {
      handleChangeCurrentPage(val);
    } else {
      handleChangeCurrentPage(currentPage);
      if (val === 0) {
        handleChangeCurrentPage(1);
      }
    }
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleChangePerPage = (item: number) => {
    setIsSelected(false);
    handleChangeSelectedPerPage(item);
  };

  return (
    <Wrapper className={className}>
      <PgActions>
        <PgAction disabled={currentPage === 1 ? true : false} onClick={() => handleChangeCurrentPage(1)}>{`<<`}</PgAction>
        <PgAction
          disabled={currentPage === 1 ? true : false}
          onClick={() => {
            handleChangeCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
          }}>{`<`}</PgAction>
        <PgAction
          disabled={currentPage === pages ? true : false}
          onClick={() => {
            handleChangeCurrentPage(currentPage < pages ? currentPage + 1 : pages);
          }}>{`>`}</PgAction>
        <PgAction disabled={currentPage === pages ? true : false} onClick={() => handleChangeCurrentPage(pages)}>{`>>`}</PgAction>
      </PgActions>
      <PgText>
        Page{' '}
        <PgPageItem>
          {currentPage} of {pages}
        </PgPageItem>
      </PgText>
      <PgGoToPage>
        Go to page: <PgGoToPageInput type='number' defaultValue={goToPage} onChange={(e) => handleChangePage(e)} />
      </PgGoToPage>
      <PerPageWrapper>
        <Dropdown selectedValue={selectedPerPage} isSelected={isSelected} handleClick={handleClick}>
          <PerPageList>
            {perPage.map((item) => (
              <PerPageItem key={`per-page-${item}`}>
                <PerPage onClick={() => handleChangePerPage(item)} className={`${selectedPerPage === item ? 'selected' : ''}`}>
                  {selectedPerPage === item ? <SelectedIcon /> : <SelectIcon />}
                  {item}
                </PerPage>
              </PerPageItem>
            ))}
          </PerPageList>
        </Dropdown>
      </PerPageWrapper>
    </Wrapper>
  );
};

export default observer(Pagination);
