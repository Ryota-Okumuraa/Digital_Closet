import { FC } from "react";
import Styled from "@emotion/styled";
import { EyeSlashOpen } from "./EyeIconOpen";
import { EyeSlashClose } from "./EyeIconClose";
import { T } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";


type Props = {
    type: "email" | "password";
    rightIcon?: boolean;
    value: string;
    iconUrl: string;
    iconAlt: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickRightIcon?: () => void;
}

export const AuthInput: FC<Props> = (props) => {
    const { type, rightIcon = false, value, iconUrl, iconAlt, placeholder, onChange, onClickRightIcon } = props;

    //この変数を使って、パスワードの表示非表示を切り替える。
    const actualInputType =
        type === "password" && rightIcon ? 'text' : type;
    return (
        <SInput>
            <input type={type} onChange={onChange} placeholder={placeholder} value={value} />
            <SIcon>
                <img src={iconUrl} alt={iconAlt} />
            </SIcon>
            {type === "password" ?
                (<SRightIcon onClick={onClickRightIcon}>
                    {rightIcon ? (<EyeSlashOpen />) : (<EyeSlashClose />)}
                </SRightIcon>) : (<></>)}
        </SInput>
    );
};

const SInput = Styled.div`
    background-color: #e5e5e5;
    position: relative;
    border-radius: 5px;
    padding-left: 50px;
    color: #AAA;
`

const SIcon = Styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
`

const SRightIcon = Styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
`
