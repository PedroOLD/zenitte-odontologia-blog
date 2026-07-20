import { IButton } from "./type"
import "./styles.scss";

export const MainButton = ({variant, label}: IButton) => {
    return (
        <button data-fs-button-variant={variant} data-fs-button>
            {label}
        </button>
    )
}