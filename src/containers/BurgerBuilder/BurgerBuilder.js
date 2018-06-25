import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';

import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    currentPrice : 4,
    purchasable : false,
    purchased  : false
  }

  updatePurchaseState(ingredients){
    // const ingredients = {
    //   ...this.state.ingredients
    // };

    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey];
    }).reduce((sum,el)=>{
      return  sum + el; },0);
    this.setState({purchasable : sum > 0});
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
    this.updatePurchaseState(updatedIngredientCount);
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
    this.updatePurchaseState(updatedIngredientCount);
    }
  }

  purchasedHandler = () => {
    this.setState({purchased:true});
  }

  purchaseCancelHandler = () =>{
    this.setState({purchased:false});
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
        <Modal show = {this.state.purchased} modalClosed= {this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          igredientAdded = {this.addIngredientHandler}
          ingredientRemoved = {this.removeIngredientHandler}
          disabledIngredient = {disabledIngredientButton}
          Purchasable = {this.state.purchasable}
          price = {this.state.currentPrice}
          click = {this.purchasedHandler}/>
      </Aux>
    );
  };
}

export default BurgerBuilder;
