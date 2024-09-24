// src/components/BurgerStack.jsx
import React from 'react'
const BurgerStack = (props) => {
  const removeFromBurger = (ingredient) => {
    props.removeFromBurger(ingredient)
  }
  return (
    <ul>
      {props.stack.map((ingredient, index) => (
        <li key={index}style={{color: ingredient.color}}>
          {ingredient.name}
          <button onClick={() => removeFromBurger(ingredient)}>X</button>
          </li>
      ))}
    </ul>
  );
};

export default BurgerStack
  