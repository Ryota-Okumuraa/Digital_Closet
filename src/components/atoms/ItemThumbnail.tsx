import { memo } from "react";
import Styled from "@emotion/styled";

type Props = {
    imgUrl: string;
}

export const ItemThumbnail = memo(({ imgUrl }: Props) => {
    return (
        <SDiv>
            <SImg src={imgUrl} alt="自分の服"></SImg>
        </SDiv>
    );
});

const SDiv = Styled.div`
    border-radius: 10px;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    width: 100%;

`

const SImg = Styled.img`
    object-fit: cover;
    width: 100%;
`