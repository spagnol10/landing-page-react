import Button from "../Button";
import RightArrowIcon from "../icon/RightArrowIcon";
import MenuItem from "./MenuItem";

const DesktopHeader = () => (
    <>
        <div className="desktop-only">
            <ul className="flex gap-1">
                <MenuItem href="#" text="Home" />
                <MenuItem href="#solution" text="Solution" />
                <MenuItem href="#testimonials" text="Depoiments" />
                <MenuItem href="#pricing" text="Price" />
                <MenuItem href="#contact" text="Contact" />
            </ul>
        </div>

        <div className="desktop-only">
            <div className="flex items-center">
                <a className="reverse-color ml-lg" href="">Login</a>
                <Button text="Register" icon={<RightArrowIcon />} />
            </div>
        </div>
    </>
)

export default DesktopHeader;
