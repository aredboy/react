import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

  const greetingStyle = {
    fontSize: '1em',
    margin: '1.2em',
  };
  return (
    <h2 style={greetingStyle}>{greeting}</h2>
  )
}

export default ItemListContainer