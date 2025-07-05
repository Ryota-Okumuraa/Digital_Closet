import { FC } from "react";
import Styled from "@emotion/styled";
import { PlusIcon } from "./Icon/PlusIcon";

type Props = {
    onClick: () => void
}

export const PlusButton: FC<Props> = (props) => {
    const { onClick } = props

    return (
        <SButton onClick={onClick}>
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


