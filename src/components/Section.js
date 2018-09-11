import { h } from 'hyperapp';

import ProjectCard from './ProjectCard';

export default ({ id, title, projects }) => (
  <section id={id}>
    <h2>{title}</h2>
    {projects.map(project => (
      <ProjectCard
        title={project.title}
        src={project.thumbnail.src}
        blurb={project.thumbnail.blurb}
        link={project.link}
      />
    ))}
  </section>
);
