import Image from "next/image"
import { IMainBanner } from "./type"
import { IconIllustration } from "./icons"
import "./styles.scss";

export const MainBanner = ({ text, backgroundImage, logo }: IMainBanner) => {
    return (
        <div data-fs-main-banner>
            <Image data-fs-image-bg src={backgroundImage} alt="background image" fill />
            <div data-fs-banner-overlay />
            <Image data-fs-image-logo src={logo} alt="logo zenitte" width={300} height={300} />
            <h1 data-fs-main-banner-text>{text}</h1>
        </div>
    )
}