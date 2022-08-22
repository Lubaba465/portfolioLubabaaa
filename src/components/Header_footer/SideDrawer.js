import React from "react";
import {Drawer, List} from '@material-ui/core'
import {NavLink} from "react-router-dom";
import {AiFillHome, AiFillLayout, AiFillPhone} from "react-icons/ai";

const SideDrawer = (props) => {

    const styles = {
        nav: {
            width: '200px',
            alignItems: 'center',
            padding: '30px'
        }
    };


    return (
        <Drawer anchor="Right"
                style={styles}
                className='nav'
                open={props.open}
                onClose={() => props.onClose(false)}>


            <List style={styles.nav}>

                <li className="underline home">
                    <NavLink exact to="/" activeClassName="active"><AiFillHome/> Home</NavLink>

                </li>
                <li className="underline">
                    <NavLink exact to="/portfolio" activeClassName="active"><AiFillLayout/> Portfolio</NavLink></li>
                <li className="underline contact"><NavLink exact to="/contact" activeClassName="active">
                    <AiFillPhone/> Contact</NavLink></li>

            </List>


        </Drawer>

    )


}

export default SideDrawer;