import { FC } from "react";
import Styled from "@emotion/styled";


type Props = {
    name: string;
}

export const ItemName = ({ name }: Props) => {
    return (
        <SDiv>
            <p>{name}</p>
        </SDiv>
    );
};

const SDiv = Styled.div`
    border-radius: 5px;
    background-color: rgba(255,255,255,0.8);
    color: #000;
    padding: 10px;
    width: 100%;
    backdrop-filter: blur(10px);
`