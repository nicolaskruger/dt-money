import { FC } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/fechar.svg";
import inImg from "../../assets/entradas.svg";
import outImg from "../../assets/saidas.svg";

export const NewTransactionModal: FC<ReactModal.Props> = (props) => {
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
                    <button
                        type="button"
                    >
                        <img src={inImg} alt="Entrada" />
                        <span>
                            Entrada
                        </span>
                    </button>
                    <button
                        type="button"
                    >
                        <img src={outImg} alt="Saida" />
                        <span>
                            Saida
                        </span>
                    </button>

                </TransactionTypeContainer>
                <input placeholder="Categoria" type="text" name="" id="" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}