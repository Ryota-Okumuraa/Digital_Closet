import React, { FC } from "react";
import Styled from "@emotion/styled";

type TextSize = "xl" | "l" | "base" | "s" | "xs"

type Props = {
    children: React.ReactNode
    size: TextSize
    weight?: string
    color?: string
    lineHeight?: string
}

export const Text: FC<Props> = (props) => {
    const { children, size, weight = "normal", color = "#000", lineHeight = "20px" } = props;
    return (
        <SText size={size} color={color} weight={weight} lineHeight={lineHeight}>
            {children}
        </SText>
    )
}

const fontSizeMap: Record<TextSize, string> = {
    xl: "30px",
    l: "20px",
    base: "16px",
    s: "14px",
    xs: "10px"
}

const SText = Styled.p<{ size: TextSize; weight: string; color: string; lineHeight: string }>`
    font-size: ${({ size }) => fontSizeMap[size]};
    color: ${({ color }) => color};
    font-weight: ${({ weight }) => weight};
    line-height: ${({ lineHeight }) => lineHeight};
    margin: 0;
`