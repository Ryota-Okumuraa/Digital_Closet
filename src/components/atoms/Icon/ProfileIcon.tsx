import Styled from "@emotion/styled";


export const ProfileIcon = () => {

    return (
        <SDiv>
            <SImg src="/images/ui/IconProfile.svg" alt="プロフィール" />
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

