import { FC } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export const TransactionTable: FC = () => {

    const list = useTransactions().transactions;

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