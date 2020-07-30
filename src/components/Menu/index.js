import React from 'react';
import Logo from './../../assets/img/logo.png';
//import ButtonLink from './components/ButtonLink';
import Button from './../Button';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="StartFlix Logo" />
            </a>

            <Button className="Button" href="/">
                Novo Vídeo
            </Button>

        </nav>
    );
}

export default Menu;