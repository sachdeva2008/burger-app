import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) =>{
    return (<li key = {igKey} ><span>{igKey}</span>:{props.ingredients[igKey]}</li>)
  });

  return (
    <Aux>
    <h2>Your Burger Contains Following Ingredients:</h2>
    <ul>
      {ingredientsSummary}
    </ul>
    <p>Continue to checkout?</p>
    </Aux>
  );

}

export default orderSummary;
