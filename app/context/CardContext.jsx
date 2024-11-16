'use client'
import React, { createContext, useContext, useState } from 'react'

const CardContext = createContext();

 export const CardProvider = ({ children }) => {

    const [cardData, setCardData] = useState(null);

    return (
        <CardContext.Provider value={{ cardData, setCardData }}>
            {children}
        </CardContext.Provider>
    )
}
export const useCard = () => {
    const context = useContext(CardContext);
    if (!context) {
        console.error('useCard esta mal implementado');
    }
    return context;
}

