import React, { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    children: React.ReactNode;
}

export const IconLabel: FC<Props> = (props) => {
    const { children } = props;

    return (
        <SP>{children}</SP>
    );
};

const SP = Styled.p`
    font-size: 10px;
`
