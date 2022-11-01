import "./about.css";

function About() {
    return (
        <div id="about">
            <div className="img-about">
                <img className="img-johan" src="./img/webdev.png" alt="Icono de desarrollador"/>
            </div>
            <div className="info-about">
                <h2 className="title-about">Hola, soy <span className="text-green">Johan Martínez</span></h2>
                <p className="subtitle-about">Desarrollador de software e Ingeniero de Sistemas y Computación.</p>
                <p className="text-about">Soy un apasionado por el mundo del desarrollo de software. Me caracterizo por ser: comunicativo, autodidacta, trabajar en equipo de manera participativa y ser responsable.</p>
                <p className="text-about">Por eso, mi objetivo es adquirir conocimientos obteniendo mayor noción del entorno y sus necesidades, para lograr crecer como profesional y persona, a través de un óptimo desempeño en el campo del cual disfruto.</p>
            </div>
            
        </div>
    );
}

export {About};