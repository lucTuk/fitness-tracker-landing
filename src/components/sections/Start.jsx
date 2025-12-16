import Section from "../utils/Section";
import watch from "../../assets/images/watch.png";

const Start = () => {
    return (
        <Section
            title="Start training already on your watch"
            description="Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut et esse cupidatat consequat. Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut et esse cupidatat consequat."
        >
            <div className="section__body">
                <div className="start__wrapper">
                    <div className="container">
                        <div className="start">
                            <div className="start__left">
                                <div className="start__text">
                                    <h2 className="start__title">
                                        Start training already on your watch
                                    </h2>
                                    <p className="start_description">
                                        Nisi ullamco tempor tempor nulla labore
                                        ad labore sit eu duis. Ut et esse
                                        cupidatat consequat. Nisi ullamco tempor
                                        tempor nulla labore ad labore sit eu
                                        duis. Ut et esse cupidatat consequat.
                                    </p>
                                </div>

                                <form action="" className="start__form">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="input start__email-input"
                                        placeholder="Email"
                                        required
                                        aria-label="Enter your email"
                                    />
                                    <input
                                        type="submit"
                                        value="Let's GO!"
                                        className="button button--yellow start__form-button"
                                        aria-label="Subscribe and start training"
                                    />
                                </form>
                            </div>
                            <img
                                src={watch}
                                alt="Smartwatch displaying fitness stats"
                                className="start__image"
                                width="300"
                                height="300"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Start;
