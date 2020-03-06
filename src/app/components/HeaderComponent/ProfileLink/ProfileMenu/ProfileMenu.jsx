import React, {useEffect, useRef} from "react";
import s from './ProfileMenu.module.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../../../redux/authReducer";

const ProfileMenu = (props) => {
    let profileMenu = useRef();

    let handleClickOutside = (e) => {
        const domNode = profileMenu;
        if ((!domNode.current || !domNode.current.contains(e.target))) {
            props.setShowMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => (document.removeEventListener('click', handleClickOutside))
    }, [])

    return <div ref={profileMenu} className={s.profileMenu}>
        <Link to={'/profile'} className={s.profileMenuLink}>Profile</Link>
        <button className={s.profileMenuLink} onClick={props.signOut}>Sign Out</button>
    </div>
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {signOut})(ProfileMenu);