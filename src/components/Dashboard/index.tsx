import { FC } from "react";
import { Container } from "./styles";
import { Summary } from "../Summary";

export const DashBoard: FC = () => {
    return (
        <Container>
            <Summary />
        </Container>
    )
}