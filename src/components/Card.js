import React from 'react'
import './cards.css'

export default function Card({data}) {
    console.log(data);
    const defaultImage = 'https://via.placeholder.com/300'; 

  return (
   <div className='card-container'>
   {data.map((currentItem)=>{ 
    const imageUrl = currentItem.urlToImage || defaultImage;
     return(
    <div key={currentItem.id}className='card'>
    <img src={imageUrl}></img>
    <div className='cardcontent'>
        <a onClick={()=>window.open(currentItem.url)} >{currentItem.title}</a>
        <p>{currentItem.description}</p>
        <button onClick={()=>window.open(currentItem.url)}>read more</button>
    </div>
    </div>
    ) })}
  </div>
  )
}
