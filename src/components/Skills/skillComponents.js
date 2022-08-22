import React from 'react';

import {FaCode, FaReact, FaTools} from 'react-icons/fa';
import {MdDevicesOther,} from 'react-icons/md';


const SkillComponents = ({icon, title, desc, direction}) => {


    return (

        <div className='SkillCard' data-aos={`fade-${direction}`} data-aos-duration="1000">
            <div className=" iconRing skillIcon" style={sIcon}>{(icon === 'FaReact' &&
                <FaReact/>) || (icon === 'FaTools' && <FaTools/>) || (icon === 'MdDevicesOther' &&
                <MdDevicesOther/>) || (icon === 'FaCode' && <FaCode/>)}</div>
            <h1 className="skillTitle">{title}</h1>
            <div className="skillDesc">{desc}</div>
        </div>
    )
}


const sIcon = {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    display: 'grid',
    placeItems: 'center',
    transition: 'all .3s ease',
    fontSize: '2rem',

}


export default SkillComponents;