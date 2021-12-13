import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background-color: var(--input-background);
        border: 1px solid #d7d7d7;
        color: var(--text-body);
        font-weight: 400;
        font-size: 1rem;
        &::placeholder {
            color: var(--text-body);
        }
        & + input {
            margin-top: 1rem;
        }
    }
    button[type="submit"]{
        background-color: var(--green);
        width: 100%;
        border-radius: 0.3125rem;
        border: none;
        height: 4rem;
        color: var(--shape);
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }
    .react-modal-close{
        position: absolute;
        right: 1.3125rem;
        top: 1.3125rem;
        border: 0;
        background: transparent;
        transition: filter .2s;
        &:hover{
            filter: brightness(0.9);
        }
        img{
            width: 0.875;
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    
`;

type RadioBoxProps = {
    transactionType: 'deposit' | 'withdraw',
    isActive: boolean
}

const color = {
    deposit: "#12A454",
    withdraw: "#E52E4D"
}

export const RadioBox = styled.button<RadioBoxProps>`
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background: ${(prop: RadioBoxProps) =>
        prop.isActive ? transparentize(0.9, color[prop.transactionType])
            : "transparent"};
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img{
            width: 20px;
            height: 20px;
        }
        span{
            color: var(--text-title);
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
        }
`;