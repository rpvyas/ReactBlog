import React from 'react';
import { useParams } from 'react-router-dom'; // <- react hook
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

// <> <- react fragment
const ArticlePage = () => {
    const { name } = useParams();
    const matchingArticle = articles.find(article => article.name === name); 
    
    return matchingArticle
    ? (
        <>
        <h1> {matchingArticle.title} </h1>
        {matchingArticle.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    )
    : (
        <NotFoundPage></NotFoundPage>
    );
};

export default ArticlePage;