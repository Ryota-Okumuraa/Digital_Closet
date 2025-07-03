import { FC } from "react";
import Styled from "@emotion/styled";
import { PlusIcon } from "./PlusIcon";

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
    display: block;
    width: 80px
    padding:10px 0;
    border: 2px solid #fff;
    corsor: pointer;
`


