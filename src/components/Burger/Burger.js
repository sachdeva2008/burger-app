import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const burger = (props) => {
  // const transformedIngredients = Object.keys(props.ingredients).map(igKey=>{
  //   return [...Array(props.ingredients[igKey])].map((_,i)=>{
  //     <BurgerIngredient key={igKey+1} type={igKey}/>;
  //   });
  // });

  let transformedingredients = Object.keys(props.ingredients)
     .map( (igKey) => {
     return [...Array(props.ingredients[igKey])].map((_,i) =>{
        return <BurgerIngredient type = {igKey} key={igKey+i} />
     });
   }).reduce((arr,el)=>{
        return arr.concat(el);
   },[]);

   if (transformedingredients.length === 0){
        transformedingredients = <p>Please Start Adding New Ingredients</p>;
   }

  return(
    <div className = {classes.Burger}>
      <BurgerIngredient type = 'bread-top'/>
        {transformedingredients}
      <BurgerIngredient type = 'bread-bottom'/>
    </div>
  );
}

export default burger;
