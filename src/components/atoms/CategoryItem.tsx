import React, { InputHTMLAttributes } from "react";
import Styled from "@emotion/styled";

type Props = {
    label: string;
    onClick: () => void;
    isActive?: boolean;
    showCheckbox?: boolean
    checked?: boolean;
    onCheckChange?: (checked: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>

export const CategoryItem = ({ label, onClick, isActive = false, showCheckbox = false, checked = false, onCheckChange, ...rest }: Props) => {

    return (
        <SWrapper isActive={(isActive)} onClick={onClick}>
            <span>{label}</span>
            {showCheckbox && (
                <SCheckbox
                    {...rest}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => {
                        onCheckChange?.(e.target.checked);
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                </SCheckbox>
            )}
        </SWrapper>
    );
};

const SWrapper = Styled.button<{ isActive: boolean }>`
    all: unset;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    color: #000;
    background-color: ${({ isActive }) => (isActive ? '#f1f1f1' : '#fff')};
    font-size: 20px;
    border-radius: 10px;
    align-items: center;
    cursor: pointer;
    height: 50px;
`

const SCheckbox = Styled.input`
    width: 20px;
    height: 20px;
`