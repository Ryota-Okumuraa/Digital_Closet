import Styled from "@emotion/styled";

export const HomeIcon = () => {
    return (
        <SDiv>
            <SImg src="/images/ui/IconHome.svg" alt="ホーム" />
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

