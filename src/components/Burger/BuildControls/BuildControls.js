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
        {controls.map(ctrl=>(
            <BuildControl label = {ctrl.label} type= {ctrl.label}/>
        ))}
    </div>
  );
}

export default buildControls;
