import React from 'react';
import Recipe from './Recipe';


const RecipeList = ({recipes}) => {
    console.log(recipes)

    const renderRecipe = recipes.map(recipe => {
        return (
            <div key={recipe.recipe_id}>
                <Recipe recipe={recipe} />
            </div>
        ) 
    });


    return (
       <div> 
        {renderRecipe}
       </div>
    )
}


export default RecipeList;