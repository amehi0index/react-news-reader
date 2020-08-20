import React, { useState, useEffect } from 'react';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web'
import Home from './pages/Home'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'; 
import './App.css'
import useShow from './useShow';


const alanKey = process.env.REACT_APP_API_KEY  

const App = () => {

  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)
  const { showText } = useShow

  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit()
  },[])

  useEffect(() => {
    alanBtn({
        key: alanKey,
        onCommand: ({ command, articles, number }) => {
          if(command === 'newHeadlines'){
            setNewsArticles(articles)
            setActiveArticle(-1)
          } 
          else if (command === 'highlight'){
            setActiveArticle((prevActiveArticle) =>  prevActiveArticle + 1)
          } 
          else if (command === 'open'){
            const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number
            const article = articles[parsedNumber - 1]
            if (parsedNumber > 20) {
              alanBtn().playText('Please try that again...');
            } 
            else if (article) {
                window.open(article.url, '_blank');
                alanBtn().playText('Opening...');
            } 
            else {
                alanBtn().playText('Please try that again...');
            }
          }
        }, bottom: '30px', right:'100px'
    })
  }, [])

  return (
    <div className="App">
        <Navbar />
        <Home articles={newsArticles} activeArticle={activeArticle}/>
        <Footer />
    </div>
  );
}

export default App
