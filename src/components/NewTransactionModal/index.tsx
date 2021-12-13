import { FC } from "react";
import Modal from "react-modal";
import { Container } from "./styles";

export const NewTransactionModal: FC<ReactModal.Props> = (props) => {
    return (
        <Modal
            {...props}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <Container>
                <h2>
                    Cadastro transação
                </h2>
                <input placeholder="Titulo" type="text" name="" id="" />
                <input placeholder="Valor" type="number" name="" id="" />
                <input placeholder="Categoria" type="text" name="" id="" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}