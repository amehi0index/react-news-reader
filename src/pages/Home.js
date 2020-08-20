import React from 'react'
import CardItem from '../components/newscards/NewsCardItem'
import InfoCards from '../components/infocards/InfoCards'
import NewsCards from '../components/newscards/NewsCards'


const Home = ({ articles, activeArticle }) => {
    if(!articles.length){
        return (
            <div className="page-container">
                 <InfoCards />
            </div>
        )
    }

    return(
        <div className="page-container">
            <NewsCards articles={articles} activeArticle={activeArticle} />
        </div>
    )
}

export default Home
