import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICE = {
    cheese:0.8,
    salad:0.2,
    meat : 1.4,
    bacon : 0.5
  }

class BurgerBuilder extends Component{

  state = {
    ingredients : {
      cheese:0,
      salad:0,
      meat : 0,
      bacon : 0
    },
    currentPrice : 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredientCount = {
      ...this.state.ingredients
    }
    updatedIngredientCount[type] = newCount;
    const oldPrice = this.state.currentPrice;
    const newPrice = oldPrice + INGREDIENT_PRICE[type];
    this.setState({ currentPrice : newPrice,ingredients : updatedIngredientCount});
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount > 0){
    const newCount = oldCount - 1;
    const updatedIngredientCount = {
      ...this.state.ingredients
    }
    updatedIngredientCount[type] = newCount;
    const oldPrice = this.state.currentPrice;
    const newPrice = oldPrice - INGREDIENT_PRICE[type];
    this.setState({ currentPrice : newPrice,ingredients : updatedIngredientCount});
    }
  }



  render(){
    const disabledIngredientButton = {
      ...this.state.ingredients
    }

    for (var key in disabledIngredientButton) {
        disabledIngredientButton[key] = disabledIngredientButton[key] <= 0 ;
    }

    return(
      <Aux>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          igredientAdded = {this.addIngredientHandler}
          ingredientRemoved = {this.removeIngredientHandler}
          disabledIngredient = {disabledIngredientButton}
          price = {this.state.currentPrice}/>
      </Aux>
    );
  };
}

export default BurgerBuilder;
