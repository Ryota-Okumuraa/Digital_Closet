import React, { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    label: string;
}

export const SelectModalButton: FC<Props> = (props) => {

    const { label } = props;

    return (
        <SDiv>
            {label}
        </SDiv>
    );
}


const SDiv = Styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    display: grid;
    place-content: center;
`

