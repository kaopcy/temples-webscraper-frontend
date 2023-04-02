import { motion } from 'framer-motion';

// hooks
import { useTemples } from '../hooks/useTemples';

const HomeSearchResult: React.FC<{ search: string }> = ({ search }) => {
   const { totalTemples } = useTemples();

   return search.length > 0 ? (
      <div className="my-10 flex flex-col items-center">
         <motion.h1 className=" mb-4 text-center text-3xl text-text">"{search}"</motion.h1>
         <span className="text-text-light">ผลการค้นหาทั้งหมด {totalTemples ?? 0} รายการ</span>
      </div>
   ) : null;
};

export default HomeSearchResult;
