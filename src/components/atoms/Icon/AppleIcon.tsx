import Styled from "@emotion/styled";

export const AppleIcon = () => {
    return (
        <SDiv>
            <img src="/AppleIcon.svg" alt="アップルアイコン" />
        </SDiv>
    );
}

const SDiv = Styled.div`
    width: 60px;
    height: 60px;
`