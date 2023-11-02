import React, { useEffect } from 'react'
import InfoCards from '../components/infocards/InfoCards'
import NewsCards from '../components/newscards/NewsCards'

const Home = ({ articles, activeArticle }) => {

    useEffect(() => {
        if(!articles){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflowY = "scroll"
        }
    }, [articles.length])

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
