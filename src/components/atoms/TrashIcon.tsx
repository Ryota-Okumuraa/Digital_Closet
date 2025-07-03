import Styled from "@emotion/styled";

export const TrashIcon = () => {
    return (
        <SDiv>
            <SImg src="/TrashIcon"/>
        </SDiv>
    );  
};

const SDiv = Styled.div`
    width: 30px;
    height: 30px;
`

const SImg = Styled.img`
    width: 100%;
`