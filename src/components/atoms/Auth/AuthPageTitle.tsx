import React, { FC } from "react";
import Styled from "@emotion/styled";


type Props = {
    children: React.ReactNode;
}


export const AuthPageTitle: FC<Props> = (props) => {
    const { children } = props
    return (
        <EP>{children}</EP>
    );
};

const EP = Styled.p`
    font-size: 30px;
`

