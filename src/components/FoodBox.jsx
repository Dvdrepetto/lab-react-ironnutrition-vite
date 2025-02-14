import React from "react";


const FoodBox = ({ food, onDelete }) => {
    const {name, calories, image, servings,id } = food;

    return (
    <div>
    <p>{name}</p>
    <img src={image} alt={name} />
    <p>Calories: {calories}</p>
    <p>Servings: {servings}</p>
    <p>
        <b>Total Calories: {servings * calories} kcal</b>
    </p>
    <button onClick={() => onDelete(id)}>Delete</button>
    </div>
);
};

export default FoodBox;
