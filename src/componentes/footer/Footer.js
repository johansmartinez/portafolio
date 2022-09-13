import './footer.css';

function Footer() {
    return (
        <footer id='contact'>
            <div>
                <p> JOHAN MARTÍNEZ </p>
                <p>Desarrollador Web</p>
            </div>
            <div className='div-links'>
                <a className='footer-contact git' href="https://github.com/johansmartinez">
                    <img className="footer-icon" src="/img/iconmonstr-github-1.svg" alt="Logo github"/>
                    @johansmartinez
                </a>
                <a className='footer-contact mail' href="mailto:johan.martinez.dev@gmail.com">
                    <img className="footer-icon" src="/img/iconmonstr-mail-thin.svg" alt="icono correo electrónico"/>
                    johan.martinez.dev@gmail.com 
                </a>
                <a className='footer-contact linkedin' href="https://www.linkedin.com/in/johan-martinez-b37a8a22a/">
                    <img className="footer-icon" src="/img/iconmonstr-linkedin-3.svg" alt="logo linkedin"/>
                    @johan-martinez-b37a8a22a
                </a>
            </div>
        </footer>
    );
}

export {Footer};