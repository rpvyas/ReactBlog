import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="page-body">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/articles-list-page">
            <ArticlesListPage />
          </Route>
          <Route path="/article/:name">
            <ArticlePage />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
