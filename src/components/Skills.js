import React from 'react';
import './Skills.css';
import Tarjeta from './Tarjeta';

function Skills() {
    return (
        <div className="skills">
            <h2>Mis Habilidades</h2>
            <div className="tarjetas">
                <Tarjeta
                    title="Frontend"
                    items={["HTML", "CSS", "JavaScript", "React","Angular"]}
                />
                <Tarjeta
                    title="Backend"
                    items={["Node.js", "C#", "Python","Java"]}
                />
                <Tarjeta
                    title="Database"
                    items={["SQL", "NoSQL", "MySQL"]}
                />
                <Tarjeta
                    title="Otros"
                    items={["Git", "RESTful APIs", "Firebase","OpenCV"]}
                />
            </div>
        </div>
    );
}

export default Skills;
