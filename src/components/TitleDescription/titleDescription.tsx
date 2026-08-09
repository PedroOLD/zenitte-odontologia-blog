import { ITitleDescription } from "./types";
import "./styles.scss";

export const TitleDescription = ({title, description}: ITitleDescription) => {
    return (
        <div data-fs-title-description>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}