import { FC } from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saidas.svg";
import totalmg from "../../assets/total.svg";

type SummaryProps = {
    name: string,
    img: string,
    price: number,
}

const list: SummaryProps[] = [
    {
        name: "Entradas",
        img: incomeImg,
        price: 17_400.00
    },
    {
        name: "Saidas",
        img: outcomeImg,
        price: 1_259.00
    },
    {
        name: "Total",
        img: totalmg,
        price: 16_141.00
    },
];

export const Summary: FC = () => {
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