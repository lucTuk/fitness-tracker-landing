import { useState } from "react";
import socialFacebook from "../../assets/social-facebook.svg";
import socialLinkedin from "../../assets/social-linkedin.svg";
import socialGoogle from "../../assets/social-google.svg";

const Navigation = () => {
    const [isBurgerOpen, setBurgerOpen] = useState(false);

    return (
        <nav
            className="navigation"
            role="navigation"
            aria-label="Main and social navigation"
        >
            <ul className="navigation__list">
                <li className="navigation__item navigation__socials">
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navigation__link"
                        aria-label="Facebook"
                    >
                        <img
                            src={socialFacebook}
                            alt="Facebook"
                            width="24"
                            height="24"
                        />
                    </a>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navigation__link"
                        aria-label="LinkedIn"
                    >
                        <img
                            src={socialLinkedin}
                            alt="LinkedIn"
                            width="24"
                            height="24"
                        />
                    </a>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navigation__link"
                        aria-label="Google"
                    >
                        <img
                            src={socialGoogle}
                            alt="Google"
                            width="24"
                            height="24"
                        />
                    </a>
                </li>

                <li className="navigation-item navigation__burger-button">
                    <button
                        type="button"
                        onClick={() => setBurgerOpen(!isBurgerOpen)}
                        aria-expanded={isBurgerOpen}
                        aria-label={isBurgerOpen ? "Close menu" : "Open menu"}
                        className={
                            isBurgerOpen
                                ? "burger-button burger-open"
                                : "burger-button"
                        }
                    >
                        <span className="burger-button__bar burger-button__bar--top"></span>
                        <span className="burger-button__bar burger-button__bar--middle"></span>
                        <span className="burger-button__bar burger-button__bar--bottom"></span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
