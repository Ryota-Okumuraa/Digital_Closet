import React, { FC } from "react";
import Styled from "@emotion/styled";


type Props = {
    children: React.ReactNode;
}


export const AuthLoginTextLink: FC<Props> = (props) => {
    const { children } = props
    return (
        <SSpan>{children}</SSpan>
    );
};


const SSpan = Styled.span`
    text-decoration: underline;
`

