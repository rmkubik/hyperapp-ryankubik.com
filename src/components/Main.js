import { h } from 'hyperapp';

import Section from './Section';

export default (state, actions) => (
  <main>
    <Section id="featured" title="Featured Projects" />
    <Section id="projects" title="All Projects" />
    <Section id="writing" title="Writing" />
  </main>
);
