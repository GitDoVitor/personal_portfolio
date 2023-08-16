import React from "react";
import "./skills.scss";
import { skillsList } from "./skillsList";

function Skills() {
    return (
        <div className="skills-wrapper">
            <div className="title-wrapper">
                <div>
                    <span className='pp-body-c-a'>Habilidades</span>
                </div>
            </div>
            <div className="info-wrapper">
                {skillsList.map((skill) => (
                    <div className="card-item">
                    <img alt='habilidade' className="skill-icon" src={skill.img_url} />
                    <span>{skill.tool_name}</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Skills;