import React from "react";
import "./experiences.scss";
import { experiencesList } from "./experiencesList";

function Experiences() {


    return (
        <div className="experiences-wrapper">
            <div className="title-wrapper">
                <div>
                    <span className='pp-body-c-a'>Experiências</span>
                </div>
                <span className="pp-subtitle-a" id="subtitle">
                    Habilidades e experiências que possuo e que estou desenvolvendo:
                </span>
            </div>
            <div className="experience-info">
                {experiencesList.map((experience) => (
                    <div className="work-wrapper">
                        <div className="experience-card-item">
                            <div>
                                <img src={experience.work_img} alt="work-img" className="work-icon" />
                            </div>
                            <div>
                                <span className="pp-body-b-c" id="work-name">
                                    {experience.work_name}
                                </span>
                            </div>
                            <div>
                                <span className="pp-body-c" id="work-time">
                                    {experience.work_time}
                                </span>
                            </div>
                        </div>
                        <div id="teste">
                            <span className="pp-body-c" id="work-desc">
                                {experience.work_desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiences;