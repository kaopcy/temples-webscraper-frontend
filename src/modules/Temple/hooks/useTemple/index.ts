import { ITempleState } from '@/modules/Temple/redux/temple';
import { useDispatch, useSelector } from '@/redux/store';

type ReturnType = {} & ITempleState;

export const useTemple = (): ReturnType => {
   const templeState = useSelector((state) => state.temple);
   const dispatch = useDispatch();

   return { ...templeState };
};
