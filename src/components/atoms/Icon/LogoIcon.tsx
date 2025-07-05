import Styled from "@emotion/styled";


export const LogoIcon = () => {

    return (
        <SDiv>
            <SImg src="/Logo.svg" alt="ロゴ" />
        </SDiv>
    );
};

const SDiv = Styled.div`
    width: 40px;
    height: 40px;
`

const SImg = Styled.img`
    width: 100%;
`

