import { classname } from '@/utils/getClassname';
import { Dispatch, SetStateAction, useState } from 'react';

import { AnimatePresence, HTMLMotionProps, motion, MotionProps, Variants } from 'framer-motion';
import { useSearchBar } from '@/modules/Temples/hooks/useSearchBar';
import { useProvinceFilter } from '../../hooks/useProvinceFilter';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { ProvinceEnum } from '@/types/filter.type';
import { useMedia, useUpdateEffect, useLockBodyScroll } from 'react-use';

import { lockBodyScroll } from '@/utils/lockBodyScroll';

type IHomeSearchFilterPopout = {
   children: React.ReactNode;
} & React.HTMLProps<HTMLFormElement>;

const variants: Variants = {
   initial: {
      x: 15,
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
      x: 15,
      opacity: 0,
      transition: {
         staggerChildren: 0.07,
      },
   },
};

const linkHover = {
   paddingLeft: '30px',
   transition: {
      staggerChildren: 0.07,
      type: 'spring',
      stiffness: 175,
   },
};

const HomeSearchFilterPopout: React.FC<IHomeSearchFilterPopout> = ({ children, ...rest }) => {
   const { searchQuery } = useSearchBar();
   const { provinceFilter } = useProvinceFilter();

   const [hovering, setHovering] = useState<boolean>(false);

   const isMobile = useMedia('(max-width: 768px)', false);

   useUpdateEffect(() => {
      if (hovering) {
         lockBodyScroll.lock();

         if (isMobile) {
            window.scrollTo({
               top: 180,
            });
         } else {
            window.scrollTo({
               top: 0,
               behavior: 'smooth',
            });
         }
      } else {
         lockBodyScroll.unlock();
      }

      return () => {
         lockBodyScroll.unlock();
      };
   }, [hovering, isMobile]);

   const { push } = useRouter();

   const filterQuery = Array.isArray(provinceFilter)
      ? provinceFilter.map((e) => provinceTranslator(e as ProvinceEnum)).join(', ')
      : provinceTranslator(provinceFilter as ProvinceEnum) ?? '';

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      push(
         { href: `/temples`, query: { search: searchQuery, filter: provinceFilter, page: 1 } },
         { href: `/temples`, query: { search: searchQuery, filter: provinceFilter, page: 1 } },
         { scroll: false },
      );
   };

   const renderOverlay = () => (
      <motion.div
         className="pointer-events-none fixed  inset-0 h-full w-full bg-black "
         initial={{ opacity: 0, zIndex: 2 }}
         animate={{ opacity: hovering ? 0.8 : 0, pointerEvents: hovering ? 'auto' : 'none' }}
         transition={{ duration: 0.15 }}
         onMouseDown={() => {
            setHovering(false);
         }}
      />
   );

   return (
      <>
         {renderOverlay()}
         <motion.form
            onMouseDown={() => setHovering(true)}
            onSubmit={onSubmit}
            className={'relative z-10 rounded-lg   bg-white  pt-10'}
            animate={
               !isMobile
                  ? {
                       paddingLeft: '40px',
                       paddingRight: '40px',
                       x: hovering ? '-100px' : '0px',
                       transition: {
                          type: 'spring',
                          stiffness: 80,
                       },
                    }
                  : {
                       ...(hovering
                          ? {
                               paddingLeft: '20px',
                               paddingRight: '20px',
                            }
                          : {
                               paddingLeft: '8px',
                               paddingRight: '8px',
                            }),
                    }
            }
         >
            {hovering && (
               <>
                  <motion.div
                     variants={variants}
                     initial="initial"
                     animate="animate"
                     exit="exit"
                     className="absolute top-full  left-0  z-[-1] hidden h-full  w-full max-w-[300px] flex-col pl-5 tracking-wide md:top-0 md:left-[100%] md:flex  lg:max-w-[300px] xl:max-w-[400px]"
                  >
                     <motion.div
                        variants={variants}
                        className="whitespace-nowrap text-2xl font-bold text-white md:text-4xl"
                     >
                        ค้นหาชื่อวัด
                     </motion.div>
                     {searchQuery.length > 0 && (
                        <motion.div
                           variants={variants}
                           className="mt-3 whitespace-nowrap text-lg text-white  md:text-lg"
                        >
                           คีย์เวิร์ด "{searchQuery}"
                        </motion.div>
                     )}
                     <motion.div variants={variants} className=" text-lg text-white md:text-lg ">
                        จังหวัด{filterQuery}
                     </motion.div>
                     <AnimatedButton />
                  </motion.div>
                  <button
                     type="submit"
                     className="absolute top-[105%] right-0 flex  items-center rounded-md bg-white px-5 py-1 md:hidden"
                  >
                     <Icon icon="material-symbols:manage-search" className="h-[23px] w-[23px] " />
                     <motion.div className="order-3 text-base font-bold text-text ">
                        ค้นหา
                     </motion.div>
                  </button>
               </>
            )}
            {children}
         </motion.form>
      </>
   );
};

const AnimatedButton: React.FC<HTMLMotionProps<'button'>> = (props) => {
   const [hoveringLink, setHoveringLink] = useState(false);

   const renderHoveredIcon = () => (
      <motion.div
         key="button-icon-hover"
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
         <Icon icon="material-symbols:chevron-right" className="h-[30px] w-[30px] " />
      </motion.div>
   );

   const renderUnHoveredIcon = () => (
      <motion.div
         key="button-icon-unhover"
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
         <Icon icon="material-symbols:manage-search" className="h-[23px] w-[23px] " />
      </motion.div>
   );

   return (
      <motion.button
         type="submit"
         onMouseEnter={() => setHoveringLink(true)}
         onMouseLeave={() => setHoveringLink(false)}
         whileHover={linkHover}
         className="relative mt-auto flex items-center self-start rounded-md  bg-white px-5 py-1 pl-10 text-text"
         {...props}
      >
         <AnimatePresence>
            {hoveringLink ? renderHoveredIcon() : renderUnHoveredIcon()}
         </AnimatePresence>
         <motion.div variants={variants} className="order-3 text-xl font-bold ">
            ตกลง
         </motion.div>
      </motion.button>
   );
};

export default HomeSearchFilterPopout;
