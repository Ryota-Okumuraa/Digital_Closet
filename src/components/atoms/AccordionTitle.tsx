import React, { FC } from "react";
import Styled from "@emotion/styled";

import { TShirtIcon } from "./TShirtIcon";
import { PlusIcon } from "./Icon/PlusIcon";
import { MinusIcon } from "./Icon/MinusIcon";

type Props = {
    label: string;
    isOpen: boolean;
    onClick: () => void;
}

export const AccordionTitle: FC<Props> = (props) => {
    const { label, onClick, isOpen } = props;
    return (
        <SWrapper onClick={onClick}>
            <SInner>
                <TShirtIcon />
                <span>{label}</span>
            </SInner>
            {isOpen ? (
                <PlusIcon />
            ) :
                (<MinusIcon />)
            }
        </SWrapper>
    );
};

const SWrapper = Styled.div`
    border-bottom: 3px solid #bababa;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 50px;
    width: 100%;
    align-items: center;
`

const SInner = Styled.div`
    display: flex;
    gap: 10px;
    font-size:20px;
    align-items: center;
`



