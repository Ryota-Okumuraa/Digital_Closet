import React, { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BrandCreateInput: FC<Props> = (props) => {
    const { placeholder, value, onChange } = props;
    return (
        <SInput placeholder={placeholder} value={value} onChange={onChange} />
    );
};

const SInput = Styled.input`
    background-color: #f1f1f1;
    color: #000;
    border-radius: 10px;
    height: 50px;
    padding: 0 10px;
    font-size: 14px;
    border: none
`
