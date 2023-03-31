import { classname } from '@/utils/getClassname';
import { Dispatch, SetStateAction, useState } from 'react';

import { AnimatePresence, motion, MotionProps, Variants } from 'framer-motion';
import { useSearchBar } from '@/modules/Temples/hooks/useSearchBar';
import { useProvinceFilter } from '../../hooks/useProvinceFilter';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { ProvinceEnum } from '@/types/filter.type';

type IPopout = {
   hovering: boolean;
   setHovering: Dispatch<SetStateAction<boolean>>;
   children: React.ReactNode;
} & React.HTMLProps<HTMLFormElement>;

const direction = 'right';

const variants: Variants = {
   initial: {
      x: direction === 'right' ? 15 : -15,
      opacity: 0,
   },
   animate: {
      x: 0,
      opacity: 1,
      transition: {
         staggerChildren: 0.07,
         type: 'spring',
         stiffness: 175,
      },
   },
   exit: {
      x: direction === 'right' ? 15 : -15,
      opacity: 0,
      transition: {
         staggerChildren: 0.07,
      },
   },
};

const linkHover =
   direction === 'right'
      ? {
           paddingLeft: '30px',
           transition: {
              staggerChildren: 0.07,
              type: 'spring',
              stiffness: 175,
           },
        }
      : {
           paddingRight: '30px',
           transition: {
              staggerChildren: 0.07,
              type: 'spring',
              stiffness: 175,
           },
        };

const Popout: React.FC<IPopout> = ({ children, hovering, setHovering, ...rest }) => {
   const { searchQuery } = useSearchBar();
   const { provinceFilter } = useProvinceFilter();

   const [hoveringLink, setHoveringLink] = useState(false);

   const {
      push,
      query: { page },
   } = useRouter();

   const filterQuery = Array.isArray(provinceFilter)
      ? provinceFilter.map((e) => provinceTranslator(e as ProvinceEnum)).join(', ')
      : provinceTranslator(provinceFilter as ProvinceEnum) ?? '';

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      push(
         { href: `/test`, query: { search: searchQuery, filter: provinceFilter, page: 1 } },
         { href: `/test`, query: { search: searchQuery, filter: provinceFilter, page: 1 } },
         { scroll: false },
      );
   };

   return (
      <form
         {...rest}
         onMouseDown={() => setHovering(true)}
         onSubmit={onSubmit}
         className={classname('relative z-10', rest.className ?? '')}
      >
         <AnimatePresence>
            {hovering && (
               <>
                  <motion.div
                     variants={variants}
                     initial="initial"
                     animate="animate"
                     exit="exit"
                     className="absolute top-full left-0  z-[-1]  flex    w-full max-w-[400px] flex-col mt-4 tracking-wide  md:hidden"
                  >
                     <motion.button
                        type="submit"
                        className="relative flex items-center self-end rounded-md  bg-white px-5 py-1 pl-10 text-text"
                        whileHover={linkHover}
                        onMouseEnter={() => setHoveringLink(true)}
                        onMouseLeave={() => setHoveringLink(false)}
                     >
                        {hoveringLink ? (
                           <motion.div
                              key="ttteett"
                              className="absolute"
                              initial={{ x: -30, opacity: 0 }}
                              animate={{
                                 x: -30,
                                 opacity: 1,
                                 transition: {
                                    type: 'spring',
                                    stiffness: 175,
                                    staggerChildren: 0.07,
                                 },
                              }}
                              exit={{ x: -30, opacity: 0 }}
                           >
                              <Icon
                                 icon="material-symbols:chevron-right"
                                 className="h-[30px] w-[30px] "
                              />
                           </motion.div>
                        ) : (
                           <motion.div
                              key="ttteetddd"
                              className="absolute order-2"
                              initial={{ x: -30, opacity: 0 }}
                              animate={{
                                 x: -30,
                                 opacity: 1,
                                 transition: {
                                    type: 'spring',
                                    stiffness: 175,
                                    staggerChildren: 0.07,
                                 },
                              }}
                              exit={{ x: -30, opacity: 0 }}
                           >
                              <Icon
                                 icon="material-symbols:manage-search"
                                 className="h-[23px] w-[23px] "
                              />
                           </motion.div>
                        )}
                        <motion.div
                           className="order-3 text-base font-bold text-text "
                        >
                           ค้นหา
                        </motion.div>
                     </motion.button>
                  </motion.div>
                  <motion.div
                     variants={variants}
                     initial="initial"
                     animate="animate"
                     exit="exit"
                     className="absolute top-full  left-0  z-[-1] hidden h-full  w-full max-w-[400px] flex-col pl-5 tracking-wide md:top-0 md:left-[100%] md:flex"
                  >
                     <motion.div
                        variants={variants}
                        className="whitespace-nowrap text-2xl font-bold text-white md:text-4xl"
                     >
                        ค้นหาชื่อวัด
                     </motion.div>
                     <motion.div
                        variants={variants}
                        className="mt-3 whitespace-nowrap text-lg text-white  md:text-lg"
                     >
                        คีย์เวิร์ด "{searchQuery}"
                     </motion.div>
                     <motion.div variants={variants} className=" text-lg text-white md:text-lg">
                        จังหวัด{filterQuery}
                     </motion.div>
                     <motion.button
                        type="submit"
                        className="relative mt-auto flex items-center self-start rounded-md  bg-white px-5 py-1 pl-10 text-text"
                        whileHover={linkHover}
                        onMouseEnter={() => setHoveringLink(true)}
                        onMouseLeave={() => setHoveringLink(false)}
                     >
                        <AnimatePresence>
                           {hoveringLink ? (
                              <motion.div
                                 key="ttteett"
                                 className="absolute"
                                 initial={{ x: -30, opacity: 0 }}
                                 animate={{
                                    x: -30,
                                    opacity: 1,
                                    transition: {
                                       type: 'spring',
                                       stiffness: 175,
                                       staggerChildren: 0.07,
                                    },
                                 }}
                                 exit={{ x: -30, opacity: 0 }}
                              >
                                 <Icon
                                    icon="material-symbols:chevron-right"
                                    className="h-[30px] w-[30px] "
                                 />
                              </motion.div>
                           ) : (
                              <motion.div
                                 key="ttteetddd"
                                 className="absolute order-2"
                                 initial={{ x: -30, opacity: 0 }}
                                 animate={{
                                    x: -30,
                                    opacity: 1,
                                    transition: {
                                       type: 'spring',
                                       stiffness: 175,
                                       staggerChildren: 0.07,
                                    },
                                 }}
                                 exit={{ x: -30, opacity: 0 }}
                              >
                                 <Icon
                                    icon="material-symbols:manage-search"
                                    className="h-[23px] w-[23px] "
                                 />
                              </motion.div>
                           )}
                        </AnimatePresence>
                        <motion.div variants={variants} className="order-3 text-xl font-bold ">
                           ตกลง
                        </motion.div>
                     </motion.button>
                  </motion.div>
               </>
            )}
         </AnimatePresence>
         {children}
      </form>
   );
};

export default Popout;
