import {
  GET_DATA,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SET_LOADING,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from './action';

export const initialState = {
  loading: true,
  isOpen: false,
  clothes: [],
  grid_view: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true};

    case SET_LISTVIEW:
      return {...state, grid_view: false};

    case SET_GRIDVIEW:
      return {...state, grid_view: true};

    case SIDEBAR_OPEN:
      return {...state, isOpen: true};

    case SIDEBAR_CLOSE:
      return {...state, isOpen: false};

    case GET_DATA:
      return {...state, loading: false, clothes: action.payload};

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
