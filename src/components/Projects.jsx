import React from 'react';
// import './Projects.css';

const projects = [
  { title: "Project 1", description: "A web app for task management." },
  { title: "Project 2", description: "An AI-powered chatbot." }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
