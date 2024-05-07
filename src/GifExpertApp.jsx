import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    // console.log(render);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;
        // categories.push(newCategory);
        // console.log(newCategory);

        setCategories( [ newCategory, ...categories ] );
        // setCategories( cat => [...cat, 'Valorant'] );

    }


    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
            // setCategories={setCategories}
                onNewCategory = {event => onAddCategory(event) }
                // currentCategories = {categories}
            />


            {/* Listado de Gif */}
            
                { 
                categories.map( (category) => (
                       <GifGrid 
                            key={category} 
                            category={category}/>

                    ))
                }
                
                {/* <li></li> */}
            
                
                {/* Gif Item */}



        </>
    )
}

