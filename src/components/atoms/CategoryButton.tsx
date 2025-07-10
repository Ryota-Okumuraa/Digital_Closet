import React from "react";
import Styled from "@emotion/styled";

type Props = {
    label: string;
}

export const CategoryButton = ({ label }: Props) => {
    return (
        <SDiv>
            <SBar></SBar>
            <span>{label}</span>
        </SDiv>
    );
};

const SDiv = Styled.div`
    border-radius: 10px;
    background-color: #e5e5e5;
    display: flex;
    gap: 15px;
    justify-content: start;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    width: fit-content;
    padding: 10px 15px;
`

const SBar = Styled.div`
    width: 2px;
    height: 20px;
    background-color: #000;
`;
