import Styled from "@emotion/styled";

export const TShirtIcon = () => {
    return (
        <SDiv>
            <img src="/images/ui/TShirt.svg" alt="Tシャツ" />
        </SDiv>
    );
};

const SDiv = Styled.div`
    width: 25px;
    height: 25px;
`