import Styled from "@emotion/styled";


export const IconProfile = () => {

    return (
        <SDiv>
            <SImg src="/IconProgile.svg" alt="プロフィール" />
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

