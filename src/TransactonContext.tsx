import { createContext, FC, useEffect, useState } from "react";
import { api } from "./services/api";

type Transaction = {
    id: number,
    title: string,
    value: number,
    type: string,
    category: string,
    date: Date,
}

type TransactionInput = Omit<Transaction, 'id'>;

// type TransactionInput = Pick<Transaction, 'title', 'value'>;

type TransactionsContextData = {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export const TransactionProvider: FC = ({ children }) => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transactions")
            .then(t => {
                setTransactions(t.data.transactions);
            });
    }, [])

    const createTransaction = async (transaction: TransactionInput) => {

        const response = await api.post("/transactions", transaction)
        setTransactions([...transactions, response.data.transaction])
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}