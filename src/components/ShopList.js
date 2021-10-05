import React, {useEffect} from 'react';
import {useGlobalContext} from '../context/AppContext';
import GridView from './GridView';
import ListView from './ListView';

const ShopList = ({eachYear}) => {
  const {clothes, grid_view, fetchData, loading} = useGlobalContext();

  useEffect(() => {
    if (eachYear) {
      fetchData(eachYear);
    }
  }, [eachYear]);

  if (loading) {
    return <h1>...loading</h1>;
  }

  if (grid_view === false) {
    return <ListView clothes={clothes} eachYear={eachYear} />;
  }
  return <GridView eachYear={eachYear} />;
};

export default ShopList;
