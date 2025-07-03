import { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    imageUrl: string;
    imageAlt: string;
}

export const TrashIcon: FC<Props> = (props) => {
    const { imageAlt, imageUrl } = props;
    return (
        <SDiv>
            <SImg src={imageUrl} alt={imageAlt} />
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