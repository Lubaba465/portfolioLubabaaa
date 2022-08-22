import React from 'react';
import '../../resources/styles.css'
import image from '../../resources/images/Lubaba.png'
import {SiCss3, SiHtml5, SiReact} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io';
import {Element} from "react-scroll";
import Projects from "../Projects";
import Skills from "../Skills";
import cv from '../../assets/CVlubaba.pdf'
import {Link} from "react-router-dom";

const Featured = () => {


    const vAllBtn = {
        width: '120px',
        height: '45px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
    }
    return (<div>

            <div className="movein">
                <div className="move">
                    <div className="featured">
                        < div className='container'>
                            < div className='featured_container'>


                                <div className="text-wrapper">

                                    <h1 data-aos="zoom-in" data-aos-duration="2100">Hallo<br></br><span>
                                       Lubaba Almohammad</span></h1>
                                    < p data-aos="zoom-in" data-aos-duration="2100">Ich bin ein kreativer Webentwickler
                                        mit einer tiefen Leidenschaft für alles, was mit Computern und Technologie zu
                                        tun hat.</p>
                                    <div aria-hidden="true" className="theme-btn-five aos-init aos-animate"
                                         data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                                         className="viewal" style={{display: 'flex', marginTop: '50px'}}>
                                        <button className="vll" style={vAllBtn}>
                                            <Link className="link" to={{ pathname: `${cv}` }}  target="_blank">Download CV</Link>
                                            </button>

                                </div>


                                </div>

                                <div className="illustration-holder">


                                </div>


                                <div className="icon bshape"
                                     data-aos="zoom-in" data-aos-duration="2100">

                                    <img src={image}
                                         alt="shape" className=""></img>
                                </div>


                                <div className="iconring rLeft"
                                     data-aos="zoom-in" data-aos-duration="2100"
                                ><SiReact/></div>
                                <div className="iconring tLeft"
                                     data-aos="zoom-in" data-aos-duration="2100"
                                ><SiHtml5/></div>
                                <div className="iconring tRight"
                                     data-aos="zoom-in" data-aos-duration="2100"
                                ><IoLogoJavascript/></div>
                                <div className="iconring bRight"
                                     data-aos="zoom-in" data-aos-duration="2100"
                                ><SiCss3/></div>

                            </div>


                        </div>
                        <div className="image">

                            <img src="http://deskireact.ibthemespro.com/static/media/99.63170ec60ddc4e4d11ee.svg"
                                 alt="shape" className="illustration"></img>
                        </div>

                        <Element name="Projects">
                            <Projects/>
                        </Element>
                        <Element name="Skills">
                            <Skills/>
                        </Element>
                    </div>
                </div>
            </div>

            <div className="overlay"></div>
        </div>


    )
}
export default Featured;