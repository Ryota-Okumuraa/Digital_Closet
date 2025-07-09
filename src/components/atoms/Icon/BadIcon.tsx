import Styled from "@emotion/styled";

export const BadIcon = () => {
    return (
        <SDiv>
            <SImg src="/images/ui/badIcon.svg" alt="バッドアイコン" />
        </SDiv>
    );
}

const SDiv = Styled.div`
    width: 24px;
    height: 24px;
`

const SImg = Styled.img`
    width: 100%;
`