import React from "react";
import Styled from "@emotion/styled";

type Props = {
    children: React.ReactNode;
}

export const AuthLoginTextLink = ({ children }: Props) => {
    return (
        <SSpan>{children}</SSpan>
    );
};

const SSpan = Styled.span`
    text-decoration: underline;
`

