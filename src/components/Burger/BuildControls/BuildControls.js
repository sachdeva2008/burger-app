import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
  {label:"Salad",type:"salad"},
  {label:"Bacon",type:"bacon"},
  {label:"Cheese",type:"cheese"},
  {label:"Meat",type:"meat"}
];

const buildControls = (props) => {
  return (
    <div className = {classes.BuildControls}>
    <p>TotalPrice:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl
              label = {ctrl.label}
              key= {ctrl.label}
              Added = {()=>props.igredientAdded(ctrl.type)}
              Removed = {()=>props.ingredientRemoved(ctrl.type)}
              disableIt = {props.disabledIngredient[ctrl.type]}
            />
        ))}
        <button className = {classes.OrderButton} disabled = {!props.Purchasable} onClick = {props.click}>ORDER NOW</button>
    </div>
  );
}

export default buildControls;
