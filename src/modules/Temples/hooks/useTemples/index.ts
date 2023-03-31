import { ITemplesState, templesAction } from '../../redux/temples';
import { useDispatch, useSelector } from '@/redux/store';

type ReturnType = {} & ITemplesState;

export const useTemples = (): ReturnType => {
   const templesState = useSelector((state) => state.temples);
   return {
      ...templesState,
   };
};
