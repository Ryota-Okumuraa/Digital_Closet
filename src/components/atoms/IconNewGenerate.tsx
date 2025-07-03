import { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    onClick: () => void;
}

export const IconLabel: FC<Props> = (props) => {
    const { onClick } = props;

    return (
        <SDiv onClick={onClick}>
            <SImg src="/Plus.svg" alt="プラス" />
        </SDiv>
    );
};

const SDiv = Styled.div`
    border-radius: 9999px;
    display: grid;
    place-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
`

const SImg = Styled.img`
    width: 30px;
    height: 30px;
`

