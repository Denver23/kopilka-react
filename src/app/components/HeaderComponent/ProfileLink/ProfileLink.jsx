import React from "react";
import s from './ProfileLink.module.scss';
import {Link} from "react-router-dom";

const ProfileLink = ({profile, ...props}) => {
    return (
        <div className={s.profileBlock}>
            <Link className={s.profileButton}>{profile.login}</Link>
        </div>
    )
}

export default ProfileLink