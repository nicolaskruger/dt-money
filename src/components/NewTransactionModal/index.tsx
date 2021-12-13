import { FC, FormEvent, useState } from "react";
import Modal from "react-modal";
import { RadioBox, Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/fechar.svg";
import inImg from "../../assets/entradas.svg";
import outImg from "../../assets/saidas.svg";
import { Input } from "../input";
import { api } from "../../services/api";

export const NewTransactionModal: FC<ReactModal.Props> = (props) => {

    const [type, setType] = useState<'deposit' | 'withdraw'>("deposit");

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        const data = {
            title,
            value,
            category,
            type,
        };

        api.post("/transactions", data);
    }

    return (
        <Modal
            {...props}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <Container
                onSubmit={handleCreateNewTransaction}
            >
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
                <Input
                    placeholder="Titulo"
                    type="text"
                    name=""
                    id=""
                    value={title}
                    onChange={setTitle}
                />
                <Input
                    placeholder="Valor"
                    type="number"
                    name=""
                    id=""
                    value={value}
                    onChange={setValue}
                />
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
                <Input
                    placeholder="Categoria"
                    type="text"
                    name=""
                    id=""
                    value={category}
                    onChange={setCategory} />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}