import { Reducer } from 'redux';

import { ISidebarState, SidebarTypes } from './types';

const INITIAL_STATE: ISidebarState = {
  data: {
    openBag: false,
    openSearch: false,
  },
};

const reducer: Reducer<ISidebarState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarTypes.OPEN_SEARCH:
      return {
        data: {
          openSearch: action.payload.data,
          openBag: false,
        },
      };
    case SidebarTypes.OPEN_BAG:
      return {
        data: {
          openSearch: false,
          openBag: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default reducer;
