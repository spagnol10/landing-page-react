import Container from "../Container";
import CloseMenuIcon from "../icon/CloseMenuIcon";
import MenuItem from "./MenuItem";

interface MobileHeaderProps {
    setShowMobileMenu: (show: boolean) => void;
    showMobileMenu: boolean;
}

export default function MobileHeader({ setShowMobileMenu, showMobileMenu }: MobileHeaderProps) {
    return (
        <div className="mobile-menu-content">
            <Container className="flex">
                <ul>
                    <MenuItem href="#" text="Home" />
                    <MenuItem href="#solution" text="Solution" />
                    <MenuItem href="#testimonials" text="Depoiments" />
                    <MenuItem href="#pricing" text="Price" />
                    <MenuItem href="#contact" text="Contact" />
                    <MenuItem href="#contact" reverseColor={true} text="Login" />
                </ul>
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                    <CloseMenuIcon />
                </span>
            </Container>
        </div>
    )
}
