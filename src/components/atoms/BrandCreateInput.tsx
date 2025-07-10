import React, { InputHTMLAttributes } from "react";
import Styled from "@emotion/styled";

export type BrandCreateInputProps = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>

export const BrandCreateInput = ({placeholder, value, onChange, ...rest}: BrandCreateInputProps) => {
    return (
        <SInput type="text" placeholder={placeholder} value={value} onChange={onChange} {...rest} />
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
    caret-color: #000;
`
