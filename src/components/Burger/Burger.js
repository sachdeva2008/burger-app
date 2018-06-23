import React from 'react';

import Classes from './Burger.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const burger = (props) => {
  // const transformedIngredients = Object.keys(props.ingredients).map(igKey=>{
  //   return [...Array(props.ingredients[igKey])].map((_,i)=>{
  //     <BurgerIngredient key={igKey+1} type={igKey}/>;
  //   });
  // });

  let transformedingredients = Object.keys(props.ingredients)
  .map( igKey => {
       return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />;
       });
   }).reduce( (accu,curr) =>{
     return accu.concat(curr);
   },[]);

   console.log(transformedingredients);

   if(transformedingredients.length === 0){
     transformedingredients = <p>Please start adding ingredients.</p>;
   }
return (
 <div className={Classes.Burger}>
       <BurgerIngredient type="bread-top" />
        { transformedingredients }
       <BurgerIngredient type="bread-bottom" />
 </div>
);
}

export default burger;
