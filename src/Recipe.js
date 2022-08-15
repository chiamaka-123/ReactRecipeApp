import React from "react";
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, directions}) => { // passing down information from app compoenent to the recipe componenet with the props  
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="recipe"></img>
            <ul> 
                Ingredients:
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a href={directions} target='_blank'>  Click Here for Instructions!  </a>
            <p> Calories: {Math.round(calories)}</p>
        </div>

    );
};

export default Recipe;