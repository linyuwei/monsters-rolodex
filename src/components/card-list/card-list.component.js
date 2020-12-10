import React from 'react'
import { Card } from '../card/card.component'

import './card-list-styles.css'

export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} /> // pass data to Card component
      // <h1 key={monster.id}> {monster.name} </h1>
    ))}
  </div> 
  // console.log(props) // {}
  // return <div className='card-list'>{props.children}</div> // SeanLin
)