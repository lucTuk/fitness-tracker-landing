const Button = ({ children, classes, color, type = "button", ...props }) => {
    const baseClass = "button";
    const classList = [baseClass];

    if (classes) {
        classList.push(classes);
    }

    if (color) {
        classList.push(`button--${color}`);
    }

    return (
        <button type={type} className={classList.join(" ")} {...props}>
            {children}
        </button>
    );
};

export default Button;
