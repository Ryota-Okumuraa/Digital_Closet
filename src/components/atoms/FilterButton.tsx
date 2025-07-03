import React, { FC } from "react";
import Styled from "@emotion/styled";

import { FilterIcon } from "./FilterIcon";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
}

export const FilterButton: FC<Props> = (props) => {
    const { children, onClick } = props;
    return (
        <SWrapper onClick={onClick}>
            <FilterIcon />
            {children}
        </SWrapper>
    );
};

const SWrapper = Styled.button`
    display: flex;
    gap: 5px
    border-radius: 10px;
    border: 3px solid #fff;
    background-color: #e5e5e5;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    padding: 10px;
`

