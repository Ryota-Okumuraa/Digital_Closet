import React, { ButtonHTMLAttributes } from "react";
import Styled from "@emotion/styled";

import { FilterIcon } from "./Icon/FilterIcon";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const FilterButton = ({ children, onClick, ...rest }: Props) => {
    return (
        <SButton onClick={onClick} {...rest} >
            <FilterIcon />
            {children}
        </SButton>
    );
};

const SButton = Styled.button`
    display: flex;
    gap: 5px;
    border-radius: 10px;
    border: 3px solid #fff;
    background-color: #e5e5e5;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    padding: 10px;
`