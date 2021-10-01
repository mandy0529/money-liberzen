import React, {createContext, useContext, useReducer} from 'react';
import {SIDEBAR_CLOSE, SIDEBAR_OPEN} from './action';
import reducer, {initialState} from './reducer';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({type: SIDEBAR_OPEN});
  };

  const closeSidebar = () => {
    dispatch({type: SIDEBAR_CLOSE});
  };

  return (
    <AppContext.Provider value={{...state, openSidebar, closeSidebar}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
