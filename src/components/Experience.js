import React from 'react';
import './Experience.css';
import emp1 from '../recursos/emp1.png';
import emp2 from '../recursos/emp2.jpg';
import emp3 from '../recursos/emp3.png';
import emp4 from '../recursos/emp4.jpg';


function Experience() {

    const EventoTimeline = ({ fecha, titulo, empresa, descripcion, imagen }) => (
        <div className="evento-timeline">
            <div className="fecha">{fecha}</div>
            <div className="descripcion">
                <div className="imagen-empresa">
                    <img src={imagen} alt="Logo Empresa" />
                </div>
                <div className="info-evento">
                    <h3>{titulo}</h3>
                    <h4>{empresa}</h4>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    );

    const eventos = [
        {
            fecha: '02/10/2023 – 02/02/2024',
            titulo: 'Desarrollador de software',
            empresa: 'Banco de alimentos "Diakonía',
            descripcion: 'Trabajando en el desarrollo de aplicaciones web utilizando tecnologías como React, Node.js y MongoDB.',
            imagen: emp1,
        },
        {
            fecha: '01/02/2023 – 31/10/2023',
            titulo: 'Desarrollador de software',
            empresa: 'Antares IT Solutions',
            descripcion: 'Responsable del análisis y diseño de sistemas informáticos para mejorar procesos internos de la empresa.',
            imagen: emp2,
        },
        {
            fecha: '04/10/2021 – 02/02/2024',
            titulo: 'Ayudante de cátedra',
            empresa: 'ESCUELA SUPERIOR POLITÉCNICA DEL LITORAL',
            descripcion: 'Ayudar en la planificación de deberes e impartición de clases relacionados a la asignatura Fundamentos de la Programación.',
            imagen: emp3,
        },
        {
            fecha: '01/02/2022 – 30/09/2022',
            titulo: 'Técnico de computación',
            empresa: 'Instituto Nacional de Investigación en Salud Pública (INSPI)',
            descripcion: 'Soluciones informáticas para control y análisis de datos, incluyendo análisis de datos del COVID-19. Creación de reportes y gráficas automatizadas, junto con soporte técnico a la dirección.',
            imagen: emp4,
        },
    ];

    return (
        <section className="experience">
            <div className="timeline">
                <h1>Experiencia</h1>
                {eventos.map((evento, index) => (
                    <EventoTimeline
                        key={index}
                        fecha={evento.fecha}
                        titulo={evento.titulo}
                        empresa={evento.empresa}
                        descripcion={evento.descripcion}
                        imagen={evento.imagen}
                    />
                ))}
            </div>
        </section>
    );

}

export default Experience;
