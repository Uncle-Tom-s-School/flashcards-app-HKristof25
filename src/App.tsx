import  { useEffect, useState } from 'react'
import { fetchCards, type CardType } from './Cars'
import Card from './Card'




const App = () => {

 const [cards,setCards] = useState<CardType[]>([])

 const [currentCard, setCurrentCard] = useState<CardType>()
 
 const [index, setIndex] = useState<number>(-3)

 const [cardclass, setcardclass] = useState<string>("CardFront")

 useEffect(()=>{
    fetchCards().then(data => {
      setCards(data)
    } )
  },[])

  useEffect(() =>{
    PullCard()
  }, [cards])

const PullCard = () =>{
  if(index == 12)
    setIndex(0)
  else
    setIndex(perv =>perv+1)
  setcardclass("CardFront")
  setCurrentCard(cards[index])
}
const FlipCard = () =>{
  setcardclass("CardBack")
}
  return (
    <div className='Main'> 
      {currentCard && <Card cardclass={cardclass} card={currentCard} pullCard={PullCard} flipCard={FlipCard} ></Card>}

      <p>{index} / 12</p>
      <progress className='ProgressBar' value={index} max={12} />
    </div>
  )
}

export default App