import React, {useState} from 'react';
import '../../resources/Allprojects.css';
import projects from '../../data/projects.json'
import ProjectComponents from '../Projects/projectComponents'


const AllProjects = () => {

    var LAMP = projects.filter(e => e.cat === "LAMP")
    var MERN = projects.filter(e => e.cat === "MERN")
    var Frontend = projects.filter(e => e.cat === "Front End")
    const [polls, setPolls] = useState(null);
// used for displaying polls and filtering
    const [filteredPolls, setfilteredPolls] = useState(null)

    function showA() {
        setfilteredPolls(LAMP)
    }

    function showB() {
        setfilteredPolls(MERN)
    }

    function showC() {
        setfilteredPolls(Frontend)
    }

    return (<div className="movein">
            <div className="move">
                < div className='container'>


                    < div className='allproject'>

                        <div className="titleWraper">
                            <h2 data-aos="fade-up" data-aos-duration="1000">All Projects</h2>
                            <p className="paraa" data-aos="fade-up" data-aos-duration="2000">Alle Projekte haben ihre
                                Open Source auf Github, die einfach überprüft werden kann, wenn Sie auf jedem Projekt
                                auf Mehr lesen klicken.</p>


                        </div>


                        <div style={filterProjects}>
                            <div className="">
                                <div style={filterProjects.bar} className="bar">

                                    <button className='btnn' onClick={() => showA()}>LAMP</button>
                                    <button className='btnn' onClick={() => showB()}>MERN</button>
                                    <button className='btnn' onClick={() => showC()}>Frontend</button>


                                </div>
                                <div> {filteredPolls ?
                                    filteredPolls && filteredPolls.map((poll) => (
                                        <>
                                            <ProjectComponents

                                                float={poll.float}
                                                title={poll.title}
                                                id={poll.pId}
                                                content={poll.content}
                                                more={poll.more}
                                                btn={poll.btn}> </ProjectComponents>                       </>

                                    )) : projects.map((skill) => (


                                        <ProjectComponents

                                            float={skill.float}
                                            title={skill.title}
                                            id={skill.pId}
                                            content={skill.content}
                                            more={skill.more}
                                            btn={skill.btn}
                                        >


                                        </ProjectComponents>

                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={sort}>
                            <div style={{display: 'flex', gap: '5px'}}>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="overlay"></div>
        </div>

    )
}

const filterProjects = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '25px',
    bar: {
        background: '#bdbdbd',
        marginTop: '50px',
        marginRight: '300px',
        width: '65vw',
        height: '50px',
        display: 'flex',
        borderRadius: '150px',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    cat: {
        display: 'flex',
        alignItems: 'center',
        transition: '.3s all',
        cursor: 'pointer',
    }
}

const sort = {
    margin: '0px auto',
    textAlign: 'center',
    marginBottom: '35px',

}

export default AllProjects
