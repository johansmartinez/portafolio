import "./skilldata.css";

function SkillData( {name, img}) {
    return (
        <div className="skill-data">
            <h3 className="sd-name">{name}</h3>
            <img className="sd-img" src={img} alt={`Logo de ${name}`}/>
        </div>
    );
}

export {SkillData};