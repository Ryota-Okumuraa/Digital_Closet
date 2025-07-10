import React from "react";
import Styled from "@emotion/styled";

import { TShirtIcon } from "./Icon/TShirtIcon";
import { PlusIcon } from "./Icon/PlusIcon";
import { MinusIcon } from "./Icon/MinusIcon";

type Props = {
    label: string;
    isOpen: boolean;
    onClick: () => void;
}

export const AccordionTitle = ({ label, onClick, isOpen }: Props) => {
    return (
        <SWrapper onClick={onClick}>
            <SInner>
                <TShirtIcon />
                <span>{label}</span>
            </SInner>
            {isOpen ? (<MinusIcon />) : (<PlusIcon />)}
        </SWrapper>
    );
};

const SWrapper = Styled.button`
    all: unset;
    border-bottom: 3px solid #bababa;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 50px;
    width: 100%;
    align-items: center;
    cursor: pointer;
`

const SInner = Styled.div`
    display: flex;
    gap: 10px;
    font-size:20px;
    align-items: center;
`



