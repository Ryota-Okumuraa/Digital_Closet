import Styled from "@emotion/styled";


export const PlusIcon = () => {

    return (
        <SDiv>
            <SImg src="/images/ui/PlusIcon.svg" alt="プラス" />
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

