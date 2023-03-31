import { motion } from 'framer-motion';
import React from 'react';

// hooks
import { useSearchBar } from '@/modules/Temples/hooks/useSearchBar';
import { useTemples } from '../hooks/useTemples';
// utils

const HomeSearchResult: React.FC = () => {
   const { searchQuery } = useSearchBar();
   const { totalTemples } = useTemples();

   return searchQuery.length > 0 ? (
      <div className="my-10 flex flex-col items-center">
         <motion.h1 className=" mb-4 text-center text-3xl text-text">"{searchQuery}"</motion.h1>
         <span className="text-text-light">ผลการค้นหาทั้งหมด {totalTemples ?? 0} รายการ</span>
      </div>
   ) : null;
};

export default HomeSearchResult;
