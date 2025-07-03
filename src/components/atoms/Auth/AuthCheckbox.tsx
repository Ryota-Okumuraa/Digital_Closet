import { FC } from "react";
import Styled from "@emotion/styled";


type Props = {
    checked: boolean;
    onClick: () => void;
}


export const AuthCheckbox: FC<Props> = (props) => {
    const { checked, onClick } = props
    return (
        <>
            {checked ? (
                <SDiv onClick={onClick}>
                    <img src="/checked-box.png" alt="チェックボックス" />
                </SDiv>
            ) : (
                <SDiv onClick={onClick}>
                    <img src="/check-box.png" alt="チェックボックス" />
                </SDiv>
            )}
        </>
    );
};

const SDiv = Styled.div`
    width: 30px;
    height: 30px;
`


