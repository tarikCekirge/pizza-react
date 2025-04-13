import React from 'react';

const IngredientButton = ({ ingredient, toggleIngredient, selectedIngredients }) => {
    const isSelected = selectedIngredients.includes(ingredient)
    return (
        <button
            type="button"
            onClick={() => toggleIngredient(ingredient)}
            className={`flex items-center gap-2  cursor-pointer`}
        >
            <span className={`size-14  flex items-center justify-center rounded-lg  ${isSelected ? "bg-yellow-400" : "bg-wood-50"}`}>
                {isSelected && <span className='font-barlow font-700 text-gray-950'>✔</span>}
            </span>
            <span className={`font-barlow font-600 ${isSelected ? "text-gray-950" : "text-gray-600"}`}>{ingredient}</span>
        </button>
    );
};

export default IngredientButton;
