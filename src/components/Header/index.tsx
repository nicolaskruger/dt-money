import { FC } from "react"
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

type HeaderProps = {
    onOpenNewTransactionModal: () => void
}

export const Header: FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal} >
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}