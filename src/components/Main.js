import { h } from 'hyperapp';

import Section from './Section';

export default ({ state: { sections } }) => (
  <main>
    {sections.map(section => (
      <Section id={section.id} title={section.title} projects={section.projects} />
    ))}
  </main>
);
