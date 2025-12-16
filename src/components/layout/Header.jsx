import logo from "../../assets/images/logo.png";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="header" role="banner">
            <div className="container">
                <div className="header__body">
                    <a
                        href="/"
                        className="header__logo"
                        aria-label="Go to homepage"
                    >
                        <img
                            src={logo}
                            alt="Company logo"
                            width="120"
                            height="40"
                        />
                    </a>

                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export default Header;
