import { useMemo, useState } from 'react';
import { Icon, Icons } from '../Icon';

interface IPaginator {
  pages: number;
  onPageRequest: (value: number) => void;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const Pagination = ({
  pages,
  onPageRequest,
  page,
  hasNextPage,
  hasPrevPage,
}: IPaginator) => {
  const [currPage, setCurrPage] = useState(page);
  const numberArray = useMemo(() => {
    return Array.from({ length: pages }, (_, index) => {
      const num = index + 1;
      return {
        number: num,
        isActive: num === currPage,
      };
    });
  }, [pages, currPage]);

  const handlePageChange = (num: number) => {
    setCurrPage(num);
    onPageRequest(num);
  };
  return (
    <div className="mt-16">
      <div className="flex flex-row justify-center" data-testid="pages_wrapper">
        <button
          type="button"
          className="w-10 h-10"
          disabled={!hasPrevPage}
          onClick={() => handlePageChange(currPage - 1)}
        >
          <Icon
            name={Icons.ArrowLeft}
            fill={hasPrevPage ? '#2D3C3C' : '#A1B2B2'}
            width={18}
            height={18}
          />
        </button>
        {numberArray.map((each) => (
          <button
            key={each.number}
            className={`w-10 h-10 ${
              each.isActive ? 'bg-accent-400 text-white' : ''
            }`}
            onClick={() => handlePageChange(each.number)}
          >
            {each.number}
          </button>
        ))}
        <button
          type="button"
          className="w-10 h-10 ml-5"
          disabled={!hasNextPage}
          onClick={() => handlePageChange(currPage + 1)}
        >
          <Icon
            name={Icons.ArrowRight}
            fill={hasNextPage ? '#2D3C3C' : '#A1B2B2'}
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
