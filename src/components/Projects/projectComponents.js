import React from 'react';

import {FaCode, FaReact, FaTools} from 'react-icons/fa';
import {MdDevicesOther,} from 'react-icons/md';
import {Link} from "react-router-dom";


const ProjectComponents = ({
                               float,
                               intro,
                               title,
                               content,
                               btnClass = '',
                               btn,
                               icon,
                               flip = false,
                               id,
                               link = 'maportfolioo',
                               more
                           }) => {


    var textfloat = '';
    if (float == 'Right') {
        textfloat = 'left'
    } else if (float == 'Left') {
        textfloat = 'right'

    }


    return (

        <div className=" ProjectCard theme-btn-five aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200"
             data-aos-delay="4000" data-aos-duration="1000">
            <div className="sText" style={{float: textfloat}}>
                <div className="skillIcon">{(icon === 'FaReact' && <FaReact/>) || (icon === 'FaTools' &&
                    <FaTools/>) || (icon === 'MdDevicesOther' && <MdDevicesOther/>) || (icon === 'FaCode' &&
                    <FaCode/>)}</div>
                <div className="skillTitle">{title}</div>
                <p className="para" data-aos="fade-up" data-aos-duration="2000">{content}</p>


                <Link className='btn' to={{pathname: `${more}`}} target="_blank">{btn}</Link>
            </div>

            <div className="ProjectCardInner" style={{float: float}} id={id}></div>
        </div>
    )
}


export default ProjectComponents;