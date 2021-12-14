import { FC, useContext } from "react";
import { TransactionContext } from "../../TransactonContext";
import { Container } from "./styles";

type Transaction = {
    id: number,
    title: string,
    value: number,
    type: string,
    category: string,
    date: Date,
}

export const TransactionTable: FC = () => {

    const list = useContext(TransactionContext) as Transaction[];

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