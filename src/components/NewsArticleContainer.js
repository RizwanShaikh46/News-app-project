import React from 'react'

function NewsArticleContainer(props) {
  return (
    <article className="pv4 bt bb b--black-10 ph3 ph0-1">
      <div className="flex flex-column flex-row-ns">
        <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <a href={props.url}
            style={{ textDecoration: 'none', color: 'black' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="f3 athelas mt0 lh-title">{props.title}</h1>
          </a>
          <p className="f5 f4-l lh-copy athelas">
            {props.content}
          </p>
        </div>
        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
          <a href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={props.urlToImage} className="db" alt="" />
          </a>
        </div>
      </div>
      <p className="f6 lh-copy gray mv0">By <span className="ttu">{props.author}</span></p>
      <time className="f6 db gray">{props.publishedAt}</time>
    </article>
  );
}

export default NewsArticleContainer