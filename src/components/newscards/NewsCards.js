import React from 'react'
import NewsCardItem from './NewsCardItem'

const NewsCards = ({ articles, activeArticle }) => {
    return(

        <div className ="row">
            <div className="container news-container">
                {articles.map((article, i) => (
                        <div className="col s4">
                         <NewsCardItem article={article} activeArticle={activeArticle}  i={i} /> 
                        </div>
                 ))}
            </div>
        </div> 

    )
}

export default NewsCards
