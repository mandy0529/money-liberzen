import {SIDEBAR_CLOSE, SIDEBAR_OPEN} from './action';

export const initialState = {
  isOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return {...state, isOpen: true};

    case SIDEBAR_CLOSE:
      return {...state, isOpen: false};

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
