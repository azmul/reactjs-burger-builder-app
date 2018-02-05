import React, {Component} from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const Burger = (props) =>{
   
   const ingredients = Object.keys(props.ingredients).map(igKey =>{
       return [...Array(props.ingredients[igKey])].map((_, index) =>{
           return <BurgerIngredient key={igKey+index} type={igKey} />
       })
   });
   console.log(ingredients);
   
   return(
       <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
               {ingredients}
            <BurgerIngredient type="bread-bottom" />
       </div>
   )
}

export default Burger;