import "../../styles/hero.css";
import HeroRectangleOne from "../../assets/images/rectangle-right-top.png";
import HeroRectangleTwo from "../../assets/images/rectangle-left-top.png";
import Container from "../Container";
import Button from "../Button";

interface HeroSectionProps {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText?: string;
}
 
const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    primaryButtonText,
    secondaryButtonText,
}) => {
    return (
        <section id="hero">
            <span className="desktop-only">
                <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
            </span>
            <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

            <Container className="content">
                <p className="desktop-onlt">Olá</p>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="flex gap-1">
                    <span>
                        <Button text={primaryButtonText} />
                    </span>
                    {secondaryButtonText && (
                        <span >
                            <Button text={secondaryButtonText} secondary />
                        </span>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;