import { combineReducers } from '@reduxjs/toolkit';

import { provinceFilterReducer } from '@/modules/Temples/redux/provinceFilter';
import { templeSearchReducer } from '../modules/Temples/redux/templeSearch';
import { templesReducer } from '@/modules/Temples/redux/temples';

import { templeReducer } from '@/modules/Temple/redux/temple';

const rootReducer = combineReducers({
   temples: templesReducer,
   temple: templeReducer,
   templeSearch: templeSearchReducer,
   provinceFilter: provinceFilterReducer,
});

export default rootReducer;
