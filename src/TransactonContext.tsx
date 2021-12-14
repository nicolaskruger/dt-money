import { createContext, FC, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionContext = createContext([]);

export const TransactionProvider: FC = ({ children }) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        api.get("/transactions")
            .then(t => {
                setList(t.data.transactions);
            });
    }, [])

    return (
        <TransactionContext.Provider value={list}>
            {children}
        </TransactionContext.Provider>
    )
}