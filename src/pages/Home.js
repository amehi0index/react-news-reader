import React from 'react'
import CardItem from '../components/newscards/NewsCardItem'
import InfoCards from '../components/infocards/InfoCards'
import NewsCards from '../components/newscards/NewsCards'


const Home = ({ articles, activeArticle }) => {
    if(!articles.length){
        return (
            <>
                <InfoCards />
            </>
        )
    }

    return(
        <NewsCards articles={articles} activeArticle={activeArticle} />
    )
}

export default Home
