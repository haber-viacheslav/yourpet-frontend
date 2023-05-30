import { ArrLeft, ArrRight } from '../buttons/buttons';
import {
  PaginationList,
  PaginationListItem,
  PaginationBtn,
  PaginationBtnActive,
  PaginationArrowBtn,
  PaginationWrp,
} from './Pagination.styled';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  paginationLength,
}) => {
  const getPageNumbers = () => {
    const step = 1;
    const range = [];
    const left = currentPage - step;
    const right = currentPage + step + 1;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        range.push(i);
      }
    }

    return range.splice(0, paginationLength);
  };

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPagination = () => {
    const pageNumbers = getPageNumbers();

    return (
      <PaginationWrp>
        <PaginationList>
          <PaginationListItem>
            <PaginationArrowBtn
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ArrLeft />
            </PaginationArrowBtn>
          </PaginationListItem>
          {pageNumbers.map(number => (
            <PaginationListItem key={number}>
              {currentPage === number ? (
                <PaginationBtnActive onClick={() => onPageChange(number)}>
                  {number}
                </PaginationBtnActive>
              ) : (
                <PaginationBtn onClick={() => onPageChange(number)}>
                  {number}
                </PaginationBtn>
              )}
            </PaginationListItem>
          ))}
          <PaginationListItem>
            <PaginationArrowBtn
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ArrRight />
            </PaginationArrowBtn>
          </PaginationListItem>
        </PaginationList>
      </PaginationWrp>
    );
  };

  return <>{renderPagination()}</>;
};
