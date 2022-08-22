import React from 'react';
import {Link} from "react-router-dom";
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
    return (

        <div className="footer" style={footer}>


            <p style={footer.paraFooter}>Bei Fragen stehe ich ihnen gerne zur verfügung</p>
            <div style={footer.socialFooter}>
                <Link to={{pathname: `https://www.instagram.com/lubabaalm12/`}} target="_blank"
                      className="socialIcon"><AiFillInstagram size={25}/></Link>
                <Link to={{pathname: `https://www.facebook.com/profile.php?id=100068200263658`}} target="_blank"
                      className="socialIcon"><AiFillFacebook size={25}/></Link>
                <Link to={{pathname: `https://www.linkedin.com/in/lubaba-almohammad-1207771a3`}} target="_blank"
                      className="socialIcon"><AiFillLinkedin size={25}/></Link>
                <Link to={{pathname: `https://github.com/`}} target="_blank" className="socialIcon"><AiFillGithub
                    size={25}/></Link>
            </div>

        </div>

    )
}

const footer = {
    width: '100vw',
    height: '250px',
    padding: '50px 50px',
    gap: '20px',
    alignItems: 'center',
    socialFooter: {
        flex: '2',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    paraFooter: {
        textAlign: 'center',
    }
}


export default Footer;