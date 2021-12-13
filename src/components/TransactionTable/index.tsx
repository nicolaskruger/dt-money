import { FC, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

type Transaction = {
    id: number,
    title: string,
    value: number,
    type: string,
    date: Date,
}

const formatDate = (date: Date): string => {
    date = new Date(date);
    const getDate = (date: Date) => date.getDay().toString().padStart(2, '0');
    const getMouth = (date: Date) => date.getMonth().toString().padStart(2, '0');
    return `${getDate(date)}/${getMouth(date)}/${date.getFullYear()}`
}

export const TransactionTable: FC = () => {

    const [list, setList] = useState<Transaction[]>([])

    useEffect(() => {
        api.get("/transactions")
            .then(t => {
                setList(t.data.transactions);
            });
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(({ title: name, value: price, type, date }, index) => (
                        <tr key={index}>
                            <td>
                                {name}
                            </td>
                            <td className={type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: "BRL"
                                }).format(Math.abs(price))}
                            </td>
                            <td>
                                {type}
                            </td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(date))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}