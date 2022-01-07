import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || [],
}

//creating global context
export const GlobalContext = createContext(initialState);

//context provider
export const GlobalProvider = ({children}) => {
    //useReducer hook initialized
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(state.transactions))
    }, [state.transactions])

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        //payload: any data we want to send to the AppReducer func for modifying state
        //pass the delete function to the provider
        })
    }

    //obviously, "transaction" is a parameter to the addTransaction method...
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function clearTransactions(transaction){
        dispatch({
            type: 'CLEAR_TRANSACTION',
            payload: transaction
        })
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            clearTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}