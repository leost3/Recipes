import React from 'react';

const Recipe = ({recipe}) => {

    return (
        <div>
            <img src={recipe.image_url} alt={recipe.title} width="25%" />
            <h1>{recipe.title}</h1>
        </div>
    )
}

export default Recipe;