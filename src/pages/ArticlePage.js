import React from 'react';
import { useParams } from 'react-router-dom'; // <- react hook
import articles from './article-content';

// <> <- react fragment
const ArticlePage = () => {
    const { name } = useParams();
    const matchingArticle = articles.find(article => article.name === name); 
    return(
        <>
        <h1> {matchingArticle.title} </h1>
        {matchingArticle.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    );
};

export default ArticlePage;