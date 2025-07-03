import React, { FC } from "react";
import Styled from "@emotion/styled";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
}


export const ForgotPasswordText: FC<Props> = (props) => {
    const { children } = props
    return (
        <Link href='/forgot-password'>
            <SLink>{children}</SLink>
        </Link>
    );
};


const SLink = Styled.p`
    text-decoration: underline;
    font-size: 14px;
    width: 100%;
    text-align: right;
`

