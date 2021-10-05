import React, {createContext, useContext, useReducer} from 'react';
import {
  GET_DATA,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SET_LOADING,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from './action';
import reducer, {initialState} from './reducer';
import axios from 'axios';

const API_START_POINT = '/.netlify/functions';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (year) => {
    dispatch({type: SET_LOADING});
    try {
      const {data} = await axios(`${API_START_POINT}/${year}`);
      const yearData = data.sort((a, b) => a.name - b.name);
      dispatch({type: GET_DATA, payload: yearData});
    } catch (error) {
      throw new Error('not fetched any datas');
    }
  };

  const controlGridView = () => {
    dispatch({type: SET_GRIDVIEW});
  };
  const controlListView = () => {
    dispatch({type: SET_LISTVIEW});
  };

  const openSidebar = () => {
    dispatch({type: SIDEBAR_OPEN});
  };

  const closeSidebar = () => {
    dispatch({type: SIDEBAR_CLOSE});
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchData,
        controlGridView,
        controlListView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
