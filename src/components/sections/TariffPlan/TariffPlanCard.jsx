const TariffPlanCard = ({ color, coast, name, benefitsList, date }) => {
    return (
        <div
            className={
                color
                    ? `traffic-plan-card traffic-plan-card--${color}`
                    : "traffic-plan-card"
            }
        >
            <div className="traffic-plan-card__name">
                <span>{name}</span>
            </div>

            <div className="traffic-plan-card__coast">
                <span>
                    ${coast} / {date}
                </span>
            </div>

            <ul className="traffic-plan-card__benefits-list">
                {benefitsList.map((benefit, index) => (
                    <li
                        className="traffic-plan-card__benefits-list-item"
                        key={`${benefit}-${index}`}
                    >
                        {benefit}
                    </li>
                ))}
            </ul>

            <button type="button" className="traffic-plan-card__button button">
                Get started
            </button>
        </div>
    );
};

export default TariffPlanCard;
