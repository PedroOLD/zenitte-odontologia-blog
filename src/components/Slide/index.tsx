"use client"

import { Children, useState } from "react"
import { ISlide } from "./type"
import { IconArrowLeft, IconArrowRight } from "./icons"
import "./styles.scss"

export const Slide = ({ children }: ISlide) => {
    const items = Children.toArray(children)
    const [current, setCurrent] = useState(0)

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1))
    }

    return (
        <div data-fs-slide>
            <div data-fs-slide-viewport>
                <div data-fs-slide-track style={{ transform: `translateX(-${current * 100}%)` }}>
                    {items.map((item, index) => (
                        <div data-fs-slide-item key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <button type="button" data-fs-slide-control="prev" onClick={handlePrev} aria-label="Slide anterior">
                <IconArrowLeft />
            </button>

            <button type="button" data-fs-slide-control="next" onClick={handleNext} aria-label="Próximo slide">
                <IconArrowRight />
            </button>

            <div data-fs-slide-dots>
                {items.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-fs-slide-dot
                        data-fs-slide-dot-active={index === current}
                        onClick={() => setCurrent(index)}
                        aria-label={`Ir para o slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
