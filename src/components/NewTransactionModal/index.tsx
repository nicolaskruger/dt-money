import { FC, useState } from "react";
import Modal from "react-modal";
import { RadioBox, Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/fechar.svg";
import inImg from "../../assets/entradas.svg";
import outImg from "../../assets/saidas.svg";

export const NewTransactionModal: FC<ReactModal.Props> = (props) => {

    const [type, setType] = useState<'deposit' | 'withdraw'>("deposit");
    return (
        <Modal
            {...props}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <Container>
                <button
                    type="button"
                    onClick={props.onRequestClose}
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar modal" />
                </button>
                <h2>
                    Cadastro transação
                </h2>
                <input placeholder="Titulo" type="text" name="" id="" />
                <input placeholder="Valor" type="number" name="" id="" />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                        transactionType="deposit"
                    >
                        <img src={inImg} alt="Entrada" />
                        <span>
                            Entrada
                        </span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={type === "withdraw"}
                        transactionType="withdraw"
                    >
                        <img src={outImg} alt="Saida" />
                        <span>
                            Saida
                        </span>
                    </RadioBox>

                </TransactionTypeContainer>
                <input placeholder="Categoria" type="text" name="" id="" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}