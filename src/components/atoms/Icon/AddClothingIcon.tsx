import { ButtonHTMLAttributes } from "react";
import Styled from "@emotion/styled";

type Props = {
    onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const AddClothingIcon = ({ onClick, ...rest }: Props) => {
    return (
        <SButton onClick={onClick} {...rest} type="button">
            <SImg src="/images/ui/Plus.svg" alt="新規作成アイコン" />
        </SButton>
    );
};

const SButton = Styled.button`
    border-radius: 9999px;
    display: grid;
    place-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    width: fit-content;
    padding: 10px;
`

const SImg = Styled.img`
    width: 30px;
    height: 30px;
`

