import React, {useEffect} from 'react';
import {Loader} from '.';
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
    return <Loader />;
  }

  if (grid_view === false) {
    return <GridView eachYear={eachYear} />;
  }
  return <ListView clothes={clothes} eachYear={eachYear} />;
};

export default ShopList;
