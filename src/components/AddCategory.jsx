import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] =useState('One Punch');

    const onInputChange = (event) =>  {
        setInputValue(event.target.value);
    };

    const onSubmitForm = (event) =>  {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategorias( categorias => [inputValue, ...categorias]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit = { onSubmitForm }>
            <input 
                type = "text"
                placeholder="Buscar gifs"
                value = {inputValue}
                onChange = { onInputChange }
            />
        </form>
        
    );
};