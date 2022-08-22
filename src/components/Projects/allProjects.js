import React  from 'react';

import ProjectComponents from './projectComponents'

import {Link} from "react-router-dom";


const AllProjects =() => {






    let allprojectslist=[
        {
            "float":"Left",
            "intro":"Project 1",
            "title":"Kinos in Deutscland",
            "content":"Im Rahmen dieses Projektes ist eine Webseite zum Darstellen von Kinos in Deutschland entwickelt. Auf dieser Website können Benutzer ein Profil erstellen und Einträge zu Kinos in Deutschland erstellen und speichern, sowie Einträge zu Filmen in den bestehenden Kino Einträgen erstellen und speichern. Der Nutzer kann die Website als Gast besuchen oder ein Profil anlegen und sich einloggen. Ziel der Website ist es, einen Überblick über die Kinos in Deutschland und die dort laufenden Filme zu schaffen, ohne dass der Nutzer die einzelnen Kino-Websites einzeln aufrufen muss.",
            "btnclass":"readMore",
            "btn":"Read More",
            "icon":true,
            "pId":"p1",
            "flip":true,
            "link":"https://github.com/Lubaba465/kinos_in_Deutschland-1.git",
            "more":"https://github.com/Lubaba465/kinos_in_Deutschland-1.git",
            "cat":"LAMP"
        },
        {
            "intro":"Project 2",
            "title":"Unterstützung der Lehrplanung im DfI durch",
            "content":"In Betracht der Vorteile von Stud.IP wird die Softwareanwendung als Stud.IP-Plugin zur Unterstützung der Veranstaltungsplanung im DfI entwickelt, sodass die Plattform hinzugefügt wird und von\n" +
                "Beiden Nutzergruppen(Lehrenden und Lehrplanenden) verwendet werden kann. Diese Softwareanwendung ermöglicht die Lehrende, ihre Daten selber ins Studip übertragen und ihre Daten aus früheren Semestern verwenden zu können. Lehrende und Sachbearbeiter/innen können sich authentifizieren und Informationen aus früheren Semestern übernehmen und anpassen",
            "btnclass":"readMore",
            "btn":"Read More",
            "icon":true,
            "pId":"p2",
            "link":"https://github.com/Lubaba465/Veranstaltungsanmeldung.git",
            "more":"https://github.com/Lubaba465/Veranstaltungsanmeldung.git",
            "cat":"LAMP",
       "float":"Right"

}
    ];

    const handleShowStripe = () => (

        allprojectslist.map((skill)=>(


            <ProjectComponents

float={skill.float}
                title={skill.title}
id={skill.pId}
content={skill.content}
more={skill.more}
btn={skill.btn}



            >


            </ProjectComponents





            >

        )));

    return(
        <div className="highlight_wrapper">

       <h1 className="projects-section__Heading-sc-1r8qvbm-1 piqbM"><span
                className="SplashText__SplashTextStyles-sc-17ii5cd-0 onayw">Projects</span></h1>
            <div className="projects" > {handleShowStripe()}
                <div className="viewal" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Link to="/portfolio"> <button className= "vll" style={vAllBtn}>View All</button></Link>
                </div>
            </div>


        </div>


    )
}
const vAllBtn = {
    marginRight: '400px',
    width:'120px',
    height:'45px',
    border:'none',
    borderRadius:'10px',
    cursor:'pointer',
    color:'grey'
}


export default AllProjects;