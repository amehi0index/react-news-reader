import React, { useState, useEffect , createRef } from 'react'
import classNames from 'classnames'

const NewsCardItem = ({ article, i, activeArticle }) => {
  const { description, publishedAt, source, title, url, urlToImage } = article
  const [elRefs, setElRefs] = useState([])
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

  useEffect(() => {
     // window.scroll(0, 0)
      setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()))
  },[])

  useEffect(() => {
      if( i === activeArticle && elRefs[activeArticle]){
          scrollToRef(elRefs[activeArticle])
      }
  },[i, activeArticle, elRefs]) 

  return (

    <div ref={elRefs[i]} className={ classNames(
      "card medium sticky-action z-depth-3 news-card", 
      activeArticle === i ? "active-card" : null) }>
        
     <div className="card-image">
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage}  alt="" />
        </a>
      </div>

      <div className="card-content news-card-content">
        <div className="news-card-details">
          <p>{(new Date(publishedAt)).toDateString()}</p>
          <p>{source.name}</p>
        </div>
        <span className="card-title news-card-title activator">
          <span className="card-title-height">{title}</span>
          <i className="material-icons indigo-text">expand_more</i>
        </span>
      </div>
    
      <div className="card-reveal">
        <span className="card-title news-card-title activator">{title}
          <i className="material-icons indigo-text">expand_less</i>
        </span>
        <p className="news-card-text activator">{description}</p>
      </div>

      <div className="card-action news-card-action">
        <a href={url} className="waves-effect waves-light btn-small news-btn">Learn More</a>
        <a href={url} className="p-num">{ i + 1 }</a>
      </div>
    </div>
  )
}
export default NewsCardItem
