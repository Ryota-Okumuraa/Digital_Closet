import React from "react";
import Styled from "@emotion/styled";

import { BadIcon } from "./Icon/BadIcon";

type Props = {
    children: React.ReactNode;
    isActive: boolean;
    onClick?: () => void;
}

export const SearchHistoryItem = ({ children, isActive, onClick }: Props) => {
    return (
        <SDiv isActive={isActive}>
            {isActive ? (
                <span onClick={onClick}>
                    <BadIcon />
                </span>
            ) : (
                <></>
            )}
            {children}
        </SDiv>
    );
};

const SDiv = Styled.div<{ isActive: boolean }>`
    display: flex;
    gap: ${({ isActive }) => (isActive ? "4px" : "0px")};
    background-color: #e5e5e5;
    border-radius:25px;
    color: #000;
    padding: ${({ isActive }) => (isActive ? "5px 20px 5px 5px" : "5px 20px")};
    width: fit-content;
    align-items: center;
    height: 30px;
`