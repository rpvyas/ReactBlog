import React from 'react';
import articles from './article-content';
import ArticlesList from '../components/ArticlesList';

// <> <- react fragment
const ArticlesListPage = () => (
    <> 
        <h1>Articles</h1>
        <ArticlesList articles={articles}></ArticlesList>        
    </>
);

export default ArticlesListPage;