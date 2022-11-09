import React from 'react'
import "./card.css"



const Card = ({name, link})=>{
   
return (
    <>
    <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <a href={link} className="card-link">Card link</a>
  </div>
</div>
    </>
)
}
export default Card;