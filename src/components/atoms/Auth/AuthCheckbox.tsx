import Styled from "@emotion/styled";

type Props = {
    checked: boolean;
    onClick: () => void;
}

export const AuthCheckbox = ({ checked, onClick }: Props) => {
    return (
        <SButton onClick={onClick} role="button">
            <img
                src={checked ? "/images/ui/checked-box.png" : "/images/ui/check-box.png"}
                alt={checked ? "チェック済み" : "未チェック"}
            />
        </SButton>
    );
};

const SButton = Styled.button`
    width: 30px;
    height: 30px;
    border: none;
    padding: 0;
    background-color: unset;
`


