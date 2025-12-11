import { useState } from "react"
import type { CardType } from "./Cars"


const Card = ({card, pullCard, cardclass, flipCard}:{card:CardType , pullCard:()=>void, cardclass:string, flipCard:()=>void}) => {

    // const [cardclass, setcardclass] = useState<string>("CardFront")
  return (
    <div  className={cardclass}>
        <div className="top">
            <h1 className="sorszam">{card.points}</h1>
        </div>
        <div onClick={flipCard} className="question">
            <h1 className="front">{card.question}</h1>
        </div>
        <div>
            <h1 className="back">{card.answer}</h1>
        </div>
        <div  className="buttons">
            <div className="yes">
                <p>Sikerült!</p>
                <i onClick={pullCard} className="fa-regular fa-circle-check"></i>
            </div>
            <div className="no">
                <p>Nem Talált!</p>
                <i onClick={pullCard} className="fa-regular fa-circle-xmark"></i>
            </div>
        </div>
    </div>
  )
}

export default Card