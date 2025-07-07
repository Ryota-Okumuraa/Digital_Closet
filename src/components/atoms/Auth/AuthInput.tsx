import { FC, JSX } from "react";
import Styled from "@emotion/styled";

import { EyeSlashOpenIcon } from "../Icon/EyeSlashOpenIcon";
import { EyeSlashCloseIcon } from "../Icon/EyeSlashCloseIcon";
import { EmailIcon } from "../Icon/EmailIcon";
import { LockKeyIcon } from "../Icon/LockKey";
import { AuthInputProps, AuthInputKind } from "@/type/form";


export const AuthInput: FC<AuthInputProps> = (props) => {
    const { type, rightIcon = false, value, placeholder, onChange, onClickRightIcon } = props;

    const IconMap: Record<AuthInputKind, JSX.Element> = {
        email: <EmailIcon />,
        password: <LockKeyIcon />
    }

    //この変数を使って、パスワードの表示非表示を切り替える。
    const actualInputType =
        type === "password" && rightIcon ? 'text' : type;

    return (
        <SWrapper>
            <SInput
                type={actualInputType}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                name={type}
                autoComplete="off"
            />
            <SIcon>
                {IconMap[type]}
            </SIcon>
            {type === "password" ?
                (<SRightIcon onClick={onClickRightIcon}>
                    {rightIcon ? (<EyeSlashOpenIcon />) : (<EyeSlashCloseIcon />)}
                </SRightIcon>) : (<></>)}
        </SWrapper>
    );
};

const SWrapper = Styled.div`
    background-color: #e5e5e5;
    position: relative;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 50px;
    color: #AAA;
`

const SInput = Styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    caret-color: #000; /* 入力中のカーソル色を指定したい場合 */
    font-size: 14px;
    width: 100%;
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
