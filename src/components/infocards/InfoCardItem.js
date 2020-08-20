import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import useShow from '../../useShow';

const InfoCardItem = ({ infoCard }) => {
   // const [showText, setShowText] = useState(false);
    const {showText, setShowText} = useShow()

    return (
        <div className="card info-card">
            <div className="card-content white-text">
                <span className="card-title info-card-title">{infoCard.title}</span>
                <span className="info-card-info">
                        {infoCard.info && infoCard.info.split(', ').map(g => ( //split string, return arr
                            <span key={g}>{g}<span className="bar">|</span></span> 
                        ))}
                 </span>
            </div>
            <div className="card-action info-card-action">
                <a  href="#" 
                    className="btn-floating btn-small waves-effect waves-light orange tooltipped" 
                    data-tooltip="Ask Alan Microphone for News with the Suggested Phrase" 
                    data-position="right"
                    onMouseEnter={() => setShowText(true)} 
                    onMouseLeave={() => setShowText(false)} >   
                        <i className="material-icons">comment</i>
                </a>

                <a href="#" className={showText ? "info-card-text-highlight" : "info-card-text"}>{infoCard.text}</a>
            </div>
        </div>
    )
}

export default InfoCardItem
