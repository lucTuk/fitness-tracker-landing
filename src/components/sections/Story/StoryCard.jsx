const StoryCard = ({ image, title, description, date }) => {
    const formattedDate = date.split("-").reverse().join(".");

    return (
        <div className="story-card">
            <img
                src={image}
                alt={title}
                className="story-card__image"
                loading="lazy"
            />

            <div className="story-card__text">
                <h4 className="story-card__title">{title}</h4>
                <div className="story-card__description">
                    <p>{description}</p>
                </div>
            </div>

            <span className="story-card__date">
                <time dateTime={date}>{formattedDate}</time>
            </span>
        </div>
    );
};

export default StoryCard;
