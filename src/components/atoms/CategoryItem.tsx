import React, { FC } from "react";
import Styled from "@emotion/styled";

type Props = {
    label: string;
    onClick: () => void;
    isActive?: boolean;
    showCheckbox?: boolean
    checked?: boolean;
    onCheckChange?: (checked: boolean) => void;
}

export const CategoryItem: FC<Props> = (props) => {
    const { label, onClick, isActive = false, showCheckbox = false, checked = false, onCheckChange } = props;

    return (
        <SWrapper isActive={(isActive)} onClick={onClick}>
            <span>{label}</span>
            {showCheckbox && (
                <SCheckbox type="checkbox" checked={checked} onChange={(e) => {
                    onCheckChange?.(e.target.checked);
                }}
                    onClick={(e) => e.stopPropagation()} // 親のonClick防止
                >
                </SCheckbox>
            )}
        </SWrapper>
    );
};

const SWrapper = Styled.div<{ isActive: boolean }>`
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