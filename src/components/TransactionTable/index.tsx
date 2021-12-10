import { FC, useEffect } from "react";
import { Container } from "./styles";

type Transaction = {
    name: string,
    price: number,
    type: string,
    date: Date,
}

const list: Transaction[] = [
    {
        name: "Desenvovimento de website",
        price: 12_000,
        type: "Desenvolvimento",
        date: new Date(),
    },
    {
        name: "Desenvovimento de website",
        price: -12_000,
        type: "Desenvolvimento",
        date: new Date(),
    },
    {
        name: "Desenvovimento de website",
        price: 12_000,
        type: "Desenvolvimento",
        date: new Date(),
    }
]

const formatDate = (date: Date): string => {
    const getDate = (date: Date) => date.getDay().toString().padStart(2, '0');
    const getMouth = (date: Date) => date.getMonth().toString().padStart(2, '0');
    return `${getDate(date)}/${getMouth(date)}/${date.getFullYear()}`
}

export const TransactionTable: FC = () => {

    useEffect(() => {
        fetch("http://localhost:3000/api/transactions")
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
                    {list.map(({ name, price, type, date }, index) => (
                        <tr>
                            <td>
                                {name}
                            </td>
                            <td className={price < 0 ? "withDraw" : "deposit"}>
                                {`R$ ${price}`}
                            </td>
                            <td>
                                {type}
                            </td>
                            <td>
                                {formatDate(date)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}