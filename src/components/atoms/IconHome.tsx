import Styled from "@emotion/styled";

export const IconHome = () => {
    return (
        <SDiv>
            <SImg src="/IconHome" alt="ホーム" />
        </SDiv>
    );
};

const SDiv = Styled.div`
    width: 35px;
    height: 35px;
`

const SImg = Styled.img`
    width: 100%;
`

