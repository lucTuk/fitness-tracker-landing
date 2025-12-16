import Section from "../../utils/Section";
import StoryCard from "./StoryCard";

import storyCardImageGreen from "../../../assets/images/story-card-image-1.png";
import storyCardImageViollet from "../../../assets/images/story-card-image-2.png";

const Stories = () => {
    return (
        <Section title="Stories of our users" onHeader={true}>
            <div className="section__body">
                <div className="stories container">
                    <ul className="stories__list">
                        <li className="stories__story">
                            <StoryCard
                                title="How Sarah doubled her productivity"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                image={storyCardImageGreen}
                                date="2020-10-17"
                            />
                        </li>
                        <li className="stories__story">
                            <StoryCard
                                title="Mark’s journey to calm mornings"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                image={storyCardImageViollet}
                                date="2021-03-22"
                            />
                        </li>
                        <li className="stories__story">
                            <StoryCard
                                title="Team synergy at TechStart Inc."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                image={storyCardImageGreen}
                                date="2022-07-08"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default Stories;
