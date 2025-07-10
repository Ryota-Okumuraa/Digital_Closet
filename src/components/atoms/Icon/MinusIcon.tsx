import Styled from "@emotion/styled";

export const MinusIcon = () => {

    return (
        <SDiv>
            <SImg src="/images/ui/MinusIcon.svg" alt="マイナス" />
        </SDiv>
    );
};

const SDiv = Styled.div`
    width: 25px;
    height: 25px;
`

const SImg = Styled.img`
    width: 100%;
`

