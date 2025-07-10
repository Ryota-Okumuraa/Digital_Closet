import Styled from "@emotion/styled";

import { SearchIcon } from "./Icon/SeachIcon";

type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}


export const SearchInput = ({ value, onChange, placeholder }: Props) => {
    return (
        <SWrapper>
            <SDiv>
                <SearchIcon />
            </SDiv>
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

const SDiv = Styled.div`
    width: 20px;
    height: 20px;
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


