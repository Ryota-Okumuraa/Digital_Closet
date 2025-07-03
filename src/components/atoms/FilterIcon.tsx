import Styled from "@emotion/styled";

export const FilterIcon = () => {
    return (
        <SDiv>
            <SImg src="/Filter.svg" alt="絞り込み"/>
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

