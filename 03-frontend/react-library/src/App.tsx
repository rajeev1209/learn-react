import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBookPage } from './layouts/SearchBookPage/SearchBookPage';
import { Redirect, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/search'>
          <SearchBookPage />
        </Route>
      </Switch>
        <Footer />
    </div>
  );
}
