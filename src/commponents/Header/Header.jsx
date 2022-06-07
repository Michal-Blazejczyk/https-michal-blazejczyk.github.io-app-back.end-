import React, { useContext, useState } from "react";
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.scss';

import LoginForm from "../LoginForm/LoginForm.jsx";

import { StoreContext } from "../../store/storeProvider";



const style = bemCssModules(HeaderStyles);

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, setUser } = useContext(StoreContext);

    const handleOnClose = () => setIsModalOpen(false);
    
    
    const handleOnClick = () => {
        if (Boolean(user)) {
            setUser(null)
        } else {
            setIsModalOpen(true);
        }
    }
    
    const setProperlyLabel = Boolean(user) ? 'wyloguj' : 'Zaloguj';
    
    return (
        <header className={style()}>
            <div className={style('logo-wrapper')}/>
            <h1 className={style('title')}>Super kursy dla programistów!</h1>
            <button onClick={handleOnClick}>{setProperlyLabel}</button>
            <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}/>
        </header>
    );
};

export default Header;