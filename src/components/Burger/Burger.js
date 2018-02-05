import React, {Component} from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const Burger = (props) =>{
   
   let ingredients = Object.keys(props.ingredients)
        .map(igKey =>{
            return [...Array(props.ingredients[igKey])].map((_, index) =>{
                return <BurgerIngredient key={igKey+index} type={igKey} />
            })
        }).reduce((arr, el)=>{
             return arr.concat(el);
        },[]);

    if(ingredients.length === 0){
        ingredients = <p> Please start adding ingredients! </p>;
    }    
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