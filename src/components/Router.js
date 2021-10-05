import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Error from '../pages/Error';
import {About, Contact, Home, Shop} from '../pages';
import {Footer, Navbar, Sidebar} from '.';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/shop/2021" exact component={Shop} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/shop/:id" exact component={Shop} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
