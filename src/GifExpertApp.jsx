import React from "react";
import { useState } from 'react';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man'])

    const onAddCategory = (newCategory) => {
        //categories.push('One Piece'); -> recordar el uso del spread, como el ejemplo de categories a continuacion
        //setCategories([ 'One Piece', ...categories]); -> de esta forma "pushearia" de manera inversa a ese array.
        setCategories([...categories, newCategory]);
        console.log(newCategory);
    }

    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*input*/}
            <AddCategory
                onNewCategory={value => onAddCategory(value)
                }
            />

            {/*listado de gifs*/}
            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }            
        </>
    )
}