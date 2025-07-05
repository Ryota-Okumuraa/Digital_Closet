import { FC } from "react";
import Styled from "@emotion/styled";
import { SearchIcon } from "./Icon/SeachIcon";


type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    placeholder: string;
}


export const SearchInput: FC<Props> = (props) => {
    const { value, onChange, onClick, placeholder } = props;

    return (
        <SWrapper>
            <SButton onClick={onClick} aria-label="検索する">
                <SearchIcon />
            </SButton>
            <SInput value={value} onChange={onChange} placeholder={placeholder} />
        </SWrapper>
    );
};

const SWrapper = Styled.div`
    padding: 10px;
    display: flex;
    gap: 5px;
    border-radius: 10px;
    background-color: #e5e5e5;
`
const SButton = Styled.button`
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 0;
`

const SInput = Styled.input`
    color: #000;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 14px;

`


