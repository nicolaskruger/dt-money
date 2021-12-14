import { FC, useContext } from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saidas.svg";
import totalmg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactonContext";

type SummaryProps = {
    name: string,
    img: string,
    price: number,
}


type SumaryDto = {
    entradas: SummaryProps,
    saidas: SummaryProps,
    total: SummaryProps
}

type Transaction = {
    id: number,
    title: string,
    value: number,
    type: string,
    category: string,
    date: Date,
}

const sumaryInit: SumaryDto = {
    entradas: {
        name: "Entradas",
        img: incomeImg,
        price: 0
    },
    saidas: {
        name: "Saidas",
        img: outcomeImg,
        price: 0
    },
    total: {
        name: "Total",
        img: totalmg,
        price: 0
    },
}

export const Summary: FC = () => {

    const data = useContext(TransactionContext).transactions;



    const sumaryDto: SumaryDto = data.reduce<SumaryDto>((acc, curr) => {

        const operPrice = (old: SummaryProps, curr: Transaction, type: string) =>
            curr.type === type ? old.price + Math.abs(curr.value) : old.price;

        const depositPrice = (old: SummaryProps, curr: Transaction) =>
            operPrice(old, curr, 'deposit');

        const withdrawPrice = (old: SummaryProps, curr: Transaction) =>
            operPrice(old, curr, 'withdraw');

        return {
            ...acc,
            entradas: {
                ...acc.entradas,
                price: depositPrice(acc.entradas, curr)
            },
            saidas: {
                ...acc.saidas,
                price: withdrawPrice(acc.saidas, curr)
            },
            total: {
                ...acc.total,
                price: acc.total.price +
                    (curr.type === "deposit" ? 1 : -1) * Math.abs(curr.value)
            }
        };
    }, sumaryInit);

    const list = [
        sumaryDto.entradas,
        sumaryDto.saidas,
        sumaryDto.total
    ]

    return (
        <Container>
            {list.map(({ name, img, price }, index) => (
                <div className={index === (list.length - 1) ? "hlb" : ""}>
                    <header>
                        <p>{name}</p>
                        <img src={img} alt={name} />
                    </header>
                    <main>
                        <strong>
                            R$ {price}
                        </strong>
                    </main>
                </div>
            ))}
        </Container>
    )
}