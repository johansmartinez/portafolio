import './footer.css';

function Footer() {
    return (
        <footer id='contact'>
            <div className='div-name'>
                <p className='big-p'>Johan Martínez</p>
            </div>
            <div className='div-links'>
                <a target="_blank" rel='noreferrer' className='footer-contact git' href="https://github.com/johansmartinez">
                    <img className="footer-icon" src="./img/iconmonstr-github-1.svg" alt="Logo github"/>
                    <span className='span-contact'>@johansmartinez</span>
                </a>
                <a target="_blank" rel='noreferrer' className='footer-contact mail' href="mailto:johan.martinez.dev@gmail.com">
                    <img className="footer-icon" src="./img/iconmonstr-mail-thin.svg" alt="icono correo electrónico"/>
                    <span className='span-contact'>johan.martinez.dev@gmail.com</span> 
                </a>
                <a target="_blank" rel='noreferrer' className='footer-contact linkedin' href="https://www.linkedin.com/in/johan-martinez-b37a8a22a/">
                    <img className="footer-icon" src="./img/iconmonstr-linkedin-3.svg" alt="logo linkedin"/>
                    <span className='span-contact'>/johan-martinez-b37a8a22a</span>
                </a>
            </div>
        </footer>
    );
}

export {Footer};