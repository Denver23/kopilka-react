import React from 'react';
import s from './BurgerMenu.module.scss';

export default class BurgerMenu extends React.Component {
    render() {
        return <div>
            <i className={"material-icons " + s.burgerButton}>menu</i>
        </div>
    }
}