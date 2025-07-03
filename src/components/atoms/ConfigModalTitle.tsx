import { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    label: string;
}

export const ConfigModalTitle: FC<Props> = (props) => {

    const { label } = props;

    return (
        <SP>{label}</SP>
    );
}

const SP = Styled.p`
    font-size: 20px;
    color: #000;
`