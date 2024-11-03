import React from 'react';
import './Projects.css';
import proy1 from '../recursos/proyecto1.jpg';
import proy2 from '../recursos/proyecto2.png';
import proy3 from '../recursos/proyecto3.png';
import proy4 from '../recursos/proyecto4.png';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Jubiteam',
      description: 'Plataforma colaborativa para desarrolladores',
      imageUrl: proy1,
      git: 'https://github.com/faontane-git/JUBIOTEAM.git',
      tools: ['Java', 'JSwing']
    },
    {
      id: 2,
      title: 'Sistema de Gestión de Alimentos',
      description: 'Sistema para administrar inventario y ventas de alimentos',
      imageUrl: proy2,
      git: 'https://github.com/faontane-git/Diakonia.git',
      tools: ['React', 'Node.js', 'React Native', 'Firebase']
    },
    {
      id: 3,
      title: 'Detector de Plagio IA',
      description: 'Herramienta para detectar similitudes en textos usando inteligencia artificial',
      imageUrl: proy3,
      git: 'https://github.com/faontane-git/plagioIA.git',
      tools: ['Python', 'Tensorflow', 'Machine Learning']
    },
    {
      id: 4,
      title: 'Segmentación de Imágenes Aplicado a Personas',
      description: 'Proyecto de segmentación de imágenes para identificar personas',
      imageUrl: proy4,
      git: 'https://github.com/AndresN17/proyectoDIP.git',
      tools: ['Python', 'OpenCV', 'Deep Learning']
    },
  ];

  return (
    <section className="projects">
      <div className="title">
        <h2>Proyectos</h2>
      </div>
      <div className="card-container">
        {projectsData.map((project) => (
          <div key={project.id} className="card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tools">
              <strong>Herramientas</strong>
              <ul>
                {project.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className="button-container">
              <a href={project.git} target="_blank" rel="noopener noreferrer">
                <button>Github</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
