import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);
    
    const onAddCategory = ( newCategory) =>  {
        // categorias.push('Valorant'); //No recomendable xq muta el estado
        // setCategorias([...categorias, 'Valorant']);
        // setCategorias(cat => [...cat, 'Valorant']);
        if(categorias.includes(newCategory)) return;
        setCategorias([newCategory, ...categorias]);

    }

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { onAddCategory} 
            />

            <ol>
                {
                    categorias.map(( category ) => (
                        <GifGrid  
                            key = { category } 
                            category = { category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}