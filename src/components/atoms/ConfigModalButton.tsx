import React, { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    label: string;
}

export const ConfigModalButton: FC<Props> = (props) => {

    const { label } = props;

    return (
        <SDiv>
            {label}
        </SDiv>
    );
}


const SDiv = Styled.div`
    width: fit-content;
    min-width: 160px;
    padding: 15px 20px;
    background-color: #dadcd8;
    color: #000;
    font-size: 16px;
    cursor: pointer;
`