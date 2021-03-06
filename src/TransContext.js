import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReduser';

const initialTransactions = [
 
    { amount: 100, desc: "Deposit" },
    { amount: -200, desc: "Utility Bill" },
    { amount: -300, desc: "Grocery" },
    { amount: 3000, desc: "Salary" }

]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}