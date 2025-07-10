import React from "react";
import Styled from "@emotion/styled";

type Props = {
    label: string;
}

export const SelectModalItem = ({ label }: Props) => {
    return (
        <SDiv>
            {label}
        </SDiv>
    );
}

const SDiv = Styled.div`
    width: 100%;
    height: 60px;
    background-color: #bababa;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    display: grid;
    place-content: center;
`