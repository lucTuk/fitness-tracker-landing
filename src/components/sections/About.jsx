import { useState } from "react";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";

import Section from "../utils/Section";
import Card from "../Card";
import "keen-slider/keen-slider.min.css";

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        mode: "free-snap",
        breakpoints: {
            "(min-width: 1000px)": {
                slides: { perView: 5 },
            },
        },
        slides: { perView: 1 },
        created() {
            setLoaded(true);
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    return (
        <Section
            title="About text"
            description="Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut et esse cupidatat consequat."
            onHeader={true}
        >
            <div className="section__body">
                <div className="about">
                    <div className="about__slider-wrapper">
                        <div
                            ref={sliderRef}
                            className="keen-slider about__slider"
                        >
                            <div className="keen-slider__slide">
                                <Card color="red" />
                            </div>
                            <div className="keen-slider__slide about__slide">
                                <Card color="pink" />
                            </div>
                            <div className="keen-slider__slide">
                                <Card color="yellow" />
                            </div>
                            <div className="keen-slider__slide">
                                <Card color="red" />
                            </div>
                            <div className="keen-slider__slide about__slide">
                                <Card color="pink" />
                            </div>
                            <div className="keen-slider__slide">
                                <Card color="yellow" />
                            </div>
                            <div className="keen-slider__slide">
                                <Card color="red" />
                            </div>
                            <div className="keen-slider__slide about__slide">
                                <Card color="pink" />
                            </div>
                            <div className="keen-slider__slide">
                                <Card color="yellow" />
                            </div>
                        </div>

                        {loaded && instanceRef.current && (
                            <div
                                className="dots"
                                role="tablist"
                                aria-label="Slider navigation"
                            >
                                {[
                                    ...Array(
                                        Math.max(
                                            0,
                                            instanceRef.current.track.details
                                                .slides.length - 4
                                        )
                                    ).keys(),
                                ].map((idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(idx);
                                        }}
                                        className={`dot${currentSlide === idx ? " active" : ""}`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                        aria-current={
                                            currentSlide === idx
                                                ? "true"
                                                : undefined
                                        }
                                        type="button"
                                    ></button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
