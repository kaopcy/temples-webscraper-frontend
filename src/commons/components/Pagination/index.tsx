import { useProvinceFilter } from '@/modules/Temples/hooks/useProvinceFilter';
import { useSearchBar } from '@/modules/Temples/hooks/useSearchBar';
import { Pagination as MuiPagination } from '@mui/material';
import { useRouter } from 'next/router';

const Pagination: React.FC<{ totalPages: number; curPage: number }> = ({ totalPages, curPage }) => {
   const { push } = useRouter();

   const { provinceFilter } = useProvinceFilter();
   const { searchQuery } = useSearchBar();

   const handleChange = async (e: React.ChangeEvent<unknown>, value: number) => {
      e.preventDefault();
      push(
         {
            href: `/test/[page]`,
            query: { search: searchQuery, filter: provinceFilter, page: value },
         },
         {
            href: `/test/[page]`,
            query: { search: searchQuery, filter: provinceFilter, page: value },
         },
         { scroll: false },
      );
   };

   return (
      <div className="mx-auto mt-5 mb-10">
         <MuiPagination page={curPage} count={totalPages} onChange={handleChange} />
      </div>
   );
};

export default Pagination;
