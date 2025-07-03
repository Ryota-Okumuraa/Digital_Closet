import { FC } from "react";
import Styled from "@emotion/styled";


type Props = {
    imageUrl: string;
    imageAlt: string;
}


export const SnsIcon: FC<Props> = (props) => {
    const { imageUrl, imageAlt } = props;

    return (
        <SDiv>
            <SImg src={imageUrl} alt={imageAlt} />
        </SDiv>
    );
};

const SDiv = Styled.div`
    width: 60px;
    height: 60px;
`

const SImg = Styled.img`
    width: 100%;
`

