import React from 'react';
import SkillComponents from './skillComponents'


const SkillList = () => {


    let listofskill = [

        {
            "icon": "FaCode",
            "title": "Sprachen",
            "desc": "HTML, CSS und Javascript Front to back including  REST api, npm, mit grundlegenden Kenntnissen in jQuery, SASS und PHP und mysql.",
            "animation": "left"
        },
        {
            "icon": "FaReact",
            "title": "Frameworks",
            "desc": "Praktische Bibliotheken und Frameworks wie React.js, Redux, Bootstrap",
            "animation": "left"
        },
        {
            "icon": "MdDevicesOther",
            "title": "Responsive Design",
            "desc": "Für mich ist Website, die responisve ist, professionell ist, daher verwende ich CSS3 Media Queries oder Bootstrap, um meine Websites für alle Geräte vollständig responsiv zu machen.",
            "animation": "right"
        },
        {
            "icon": "FaTools",
            "title": "Tools & Apps",
            "desc": "Git und Github",
            "animation": "right"
        }


    ];


    const handleShowStripe = () => (
        listofskill.map((skill) => (


            <SkillComponents
                icon={skill.icon}
                title={skill.title}
                desc={skill.desc}
                direction={skill.animation}
            >


            </SkillComponents>

        )));

    return (
        <div className="skill_wrapper"><h1 className="projects-section__Heading-sc-1r8qvbm-1 piqbM"><span
            className="SplashText__SplashTextStyles-sc-17ii5cd-0 onayw">Skills</span></h1>

            <div className="skill"> {handleShowStripe()} </div>

        </div>
    )
}

export default SkillList;