import React from 'react'
import InfoCardItem from './InfoCardItem'
import info from '../../info'

const InfoCards = () => {

        return(
            <div className ="row info-row">
               {info.infoCards.map(infoCard => (
                    <div className="col s12 l6 info-card-col">
                     <InfoCardItem infoCard={infoCard} />
                    </div>
                ))}
            </div> 
        )
}

export default InfoCards
