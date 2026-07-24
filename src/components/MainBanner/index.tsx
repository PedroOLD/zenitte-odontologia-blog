import Image from "next/image"
import { IMainBanner } from "./type"
import "./styles.scss";

const MainBanner = ({ text, backgroundImage, logo }: IMainBanner) => {
    return (
        <div data-fs-main-banner>
            <Image src={backgroundImage} alt="background image" fill />
            <Image src={logo} alt="logo zenitte" fill />
            <p>{text}</p>
        </div>
    )
}