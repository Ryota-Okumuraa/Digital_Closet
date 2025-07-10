import Styled from "@emotion/styled";

type Props = {
    size: `${number}px`;
}

export const TrashIcon = ({ size }: Props) => {
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
    object-fit: contain;
`