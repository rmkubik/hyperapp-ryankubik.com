import projects from './projects';
import writing from './writing';

export default {
  sections: [
    {
      id: 'featured',
      title: 'Featured Projects',
      projects: [projects.unstable, projects.trainsmission, projects.eclipse],
    },
    {
      id: 'projects',
      title: 'All Projects',
      projects: Object.values(projects),
    },
    {
      id: 'writing',
      title: 'Writing',
      projects: Object.values(writing),
    },
  ],
};
