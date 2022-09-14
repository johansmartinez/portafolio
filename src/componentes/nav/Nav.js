import './nav.css';

function Nav() {
    return (
        <nav id='nav'>
            <a href='#nav'>
                <img className='home-icon' src='/img/icons8-home.svg' alt='ïcono de Home'></img>
            </a>
            <ul>
                <li><a href="#about">Acerca</a></li>
                <li><a href="#backend">Backend</a></li>
                <li><a href="#frontend">Frontend</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
}

export {Nav};