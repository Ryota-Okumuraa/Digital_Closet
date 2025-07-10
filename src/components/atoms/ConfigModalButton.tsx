import React from "react";
import Styled from "@emotion/styled";

export type ConfigModalButtonProps = {
    label: string;
    onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const ConfigModalButton = ({ label, onClick, ...rest }: ConfigModalButtonProps) => {

    return (
        <SButton onClick={onClick} type="button" {...rest}>
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