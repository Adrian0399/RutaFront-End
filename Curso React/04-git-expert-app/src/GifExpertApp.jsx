import { useState } from "react"
import { AddCateory } from "./components/AddCateory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Naruto' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes( newCategory ) ) return;


        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
        //setCategories( cat => [ ...cat, 'Fortnite']);
    }

  return (
    <>
    
        <h1>GifExpertApp</h1>
        

        <AddCateory 
            //setCategories={ setCategories }
            onNewCategory={ (value) => onAddCategory(value) }
            
        />
        

        { 
            categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
        }


    </>
  )
}
