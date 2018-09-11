import { h } from 'hyperapp';

import Section from './Section';

export default ({ state: { sections }, projects }) => (
  <main>
    {sections.map(section => (
      <Section
        id={section.id}
        title={section.title}
        projects={section.projects.map(project => projects[project])}
      />
    ))}
  </main>
);
