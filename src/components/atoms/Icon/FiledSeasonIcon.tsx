import Styled from "@emotion/styled";

type Props = {
    season: "spring" | "summer" | "autumn" | "winter";
}

const seasonMap: { [key in Props["season"]]: string } = {
    spring: "/images/ui/springIcon.svg",
    summer: "/images/ui/summerIcon.svg",
    autumn: "/images/ui/automIcon.svg",
    winter: "/images/ui/whinterIcon.svg"
}

export const FiledSeasonIcon = ({ season }: Props) => {
    return (
        <SCiycle>
            <img src={seasonMap[season]} alt={season} />
        </SCiycle>);
};

const SCiycle = Styled.div`
    width: 30px;
    height: 30px;
    border-radius: 9999px;
`