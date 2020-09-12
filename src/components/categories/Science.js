import React from 'react'
import NewsContainer from '../NewsContainer'
import NewsArticleContainer from '../NewsArticleContainer'

function Science(props) {

    return (
        <NewsContainer onSignout={props.onSignout}>
        {
         props.science.map((article, index) => <NewsArticleContainer
         key={index}
         title={article.title}
         content={article.content}
         urlToImage={article.urlToImage}
         author={article.author}
         publishedAt={article.publishedAt}
         url={article.url}
         />)  
        }
      </NewsContainer>
    )
}

export default Science