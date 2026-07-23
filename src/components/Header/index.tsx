import { MainButton } from "../Button"
import { IconLogo } from "./icons"
import "./styles.scss"

export const Header = () => {
    return (
        <div data-fs-header>
            <div data-fs-header-logo-name>
                <IconLogo />

                <p>Zênitte odontologia estética</p>
            </div>

            <MainButton label="Agende agora" variant="solid" />
        </div>
    )
}