import React from 'react'
import card from './card.module.css'

const Card=({name,image,role, charImg, dob}) => {
    return (
        <div className={card.print}>
            <img src={charImg} style={{ width: '100%' }} />
            <p className={card.name}>{name}</p>
            <p className={card.role}>{role}</p>
            <p className={card.role}>{dob}</p>
          </div>
    )
}

export default Card
