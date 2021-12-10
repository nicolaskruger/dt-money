import { FC } from "react";
import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";

export const DashBoard: FC = () => {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}