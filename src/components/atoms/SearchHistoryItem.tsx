import React, { FC } from "react";
import Styled from "@emotion/styled";


type Props = {
    children: React.ReactNode;
}


export const SearchHistoryItem: FC<Props> = (props) => {
    const { children } = props;
    return (
        <SDiv>
            {children}
        </SDiv>
    );
};

const SDiv = Styled.div`
    backgroud-color: #e5e5e5;
    border-radius:25px;
    color: #000;
    padding: 5px 20px;
`



