import React from 'react';

import Aux from '../../../hoc/Aux';

import Button from '../../UI/Button/Button';

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
    <p>Your total amount:<span style = {{'font-weight': 'bold'}}>{props.totalPrice}</span></p>
    <Button btnType = "Danger" clicked = {props.clickedForCancel}>CANCEL</Button>
    <Button btnType = "Success" clicked = {props.clickedForConfirm}>CONFIRM</Button>
    </Aux>
  );

}

export default orderSummary;
