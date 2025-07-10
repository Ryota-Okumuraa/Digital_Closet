import { ButtonHTMLAttributes } from "react";
import Styled from "@emotion/styled";

import { PlusIcon } from "./Icon/PlusIcon";

type Props = {
    onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const PlusButton = ({ onClick, ...rest }: Props) => {
    return (
        <SButton onClick={onClick} {...rest}>
            <PlusIcon></PlusIcon>
        </SButton>
    );
};

const SButton = Styled.button`
    display: flex;
    justify-content: center;
    width: 80px;
    padding:10px 0;
    border: 2px solid #fff;
    corsor: pointer;
    border-radius: 10px;
    align-items: center;
`