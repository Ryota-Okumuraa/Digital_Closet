import { FC } from "react";
import Styled from "@emotion/styled";


type Props = {
    color: "red" | "orange" | "pink" | "white" | "yellow" | "black" | "green" | "gray" | "blue" | "brown" | "purple" | "beige" | "other";
}

export const FiledColorIcon: FC<Props> = (props) => {
    const { color } = props
    return <SCylcle color={color} />
};

const SCylcle = Styled.div<{ color: Props["color"] }>`
    width: 30px;
    height: 30px;
    border-radius: 99999px;
    ${({ color }) => {
        if (color === "white") {
            return `
                border: 1px solid #000;
                background-color: #fff;
            `;
        }

        if (color === "other") {
            return `
                background-image: url("/images/ui/otherColor.png");
                background-size: cover;
                background-position: center;
                border:none;
            `
        }

        const colorMap: { [key in Props["color"]]: string } = {
            red: "#EE5663",
            orange: "#F98140",
            pink: "#F8AFD7",
            white: "#fff",
            yellow: "#FED14D",
            black: "#000000",
            green: "#9FD563",
            gray: "#A9B2BE",
            blue: "#4DBEE9",
            brown: "#81604C",
            purple: "#AD8EEF",
            beige: "#DFD2AD",
            other: "#ccc"
        }

        const bg = colorMap[color] ?? "#ccc"; // 万が一未定義の場合に備えて

        return `
            background-color: ${bg};
            border: none;
    `;
    }}

`
