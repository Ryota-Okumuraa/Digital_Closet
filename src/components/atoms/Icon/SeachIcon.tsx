import Styled from "@emotion/styled";

export const SearchIcon = () => {
    return (
        <SDiv>
            <SImg src="/SearchIcon.svg" alt="検索" />
        </SDiv>
    );
};

const SDiv = Styled.div`
    width: 20px;
    height: 20px;
`

const SImg = Styled.img`
    width: 100%;
`

