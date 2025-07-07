import { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    size: string,
}

export const TrashIcon: FC<Props> = (props) => {
    const { size } = props;
    return (
        <SDiv size={size}>
            <SImg src="/images/ui/TrashIcon.svg" alt="ゴミ箱" />
        </SDiv>
    );
};

const SDiv = Styled.div<{ size: string }>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
`

const SImg = Styled.img`
    width: 100%;
`