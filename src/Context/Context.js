import React, {useState, createContext} from 'react';

export const HndhrydContext = createContext()

export const HndhrydProvider = (props) => {
    
    const [dataFoto, setDataFoto] = useState([
        {thumb: "hasemeleh", hadeh: 'https://drive.google.com/uc?export=view&id=1gmOy_eOCU9KxB19UPEGOx7eBzD7yMWh9', desc: 4000 },
        {thumb: "Manggis", hadeh: 'https://drive.google.com/uc?export=view&id=1WL_wkbywbaByBUngQ8PCV6mHbP4CCtVJ', desc: 10000},
        {thumb: "Nangka", hadeh: 'https://drive.google.com/uc?export=view&id=1RoIO6yL1lZVq5suT3-ckeIV2XHoSIxSg', desc: 2000},
        {thumb: "Durian", hadeh: 'https://drive.google.com/uc?export=view&id=10qFfaY-G9dS1L9y4Snf3ZqEBhFqgv9G1', desc: 5000},
        {thumb: "Strawberry", hadeh: 'https://drive.google.com/uc?export=view&id=1c5URYmbo6CAJaupfTpulc5H1ehDtvcZO', desc: 6000},
        {thumb: "Strawberry", hadeh: 'https://drive.google.com/uc?export=view&id=1Jb6XiqouKNb7jIY0aD7qrC_7CfDeMP4E', desc: 6000},
        {thumb: "Strawberry", hadeh: 'https://drive.google.com/uc?export=view&id=14Js2nhvQlfmOHA0q1hMFyVSQ24cVl9L1', desc: 6000},  
        {thumb: "Strawberry", hadeh: 'https://drive.google.com/uc?export=view&id=1Tf6pJndjGKlKfezNQqj6KZYiRV0JqwUJ', desc: 6000}
    ]) 

    const [input, setInput] = useState({
        thumb: "",
        hadeh: "",
        desc: ""
    })

    let state = {
        dataFoto, setDataFoto,
        input, setInput,
    }

    return(
        <HndhrydContext.Provider value={{state}}>
            {props.children}
        </HndhrydContext.Provider>
        
    )
};