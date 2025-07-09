import React, { FC } from "react";
import Styled from "@emotion/styled";

export type BrandCreateInputProps = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BrandCreateInput: FC<BrandCreateInputProps> = (props) => {
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
    padding-left:10px;
    font-size: 14px;
    border: none;
    display: block;
    width: 100%;
    outline: none;
    box-shadow: none;
    caret-color: #000; /* 入力中のカーソル色を指定したい場合 */
`
