import React, { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    label: string;
    onClick: () => void;
}

export const ConfigModalButton: FC<Props> = (props) => {

    const { label, onClick } = props;

    return (
        <SButton onClick={onClick}>
            {label}
        </SButton>
    );
}


const SButton = Styled.button`
    width: fit-content;
    min-width: 160px;
    padding: 15px 20px;
    background-color: #dadcd8;
    color: #000;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    border: none;

`