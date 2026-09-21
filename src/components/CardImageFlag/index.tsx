import Image from "next/image"
import { ICardSImage } from "./type"
import { MainButton } from "../Button"

export const CardImageFlap = ({imageAfter, imageBefore, description, labelButon}: ICardSImage) => {
    return (
        <div data-fs-card-image-flap>
            <div data-fs-card-image>
                <Image src={imageAfter} alt="exemplo de procedimento: resultado" fill />
                <Image src={imageBefore} alt="exemplo de procedimento: resultado"  fill/>
            </div>

            <div data-fs-card-content>
                <p>{description}</p>
                <MainButton label={labelButon} variant="solid" />
            </div>
        </div>
    )
}