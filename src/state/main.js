import projects from './projects';
import writing from './writing';

const {
  unstable, trainsmission, eclipse, ...allOtherProjects
} = projects;

export default {
  sections: [
    {
      id: 'featured',
      title: 'Featured Projects',
      projects: Object.values([unstable, trainsmission, eclipse]),
    },
    {
      id: 'projects',
      title: 'All Projects',
      projects: Object.values(allOtherProjects),
    },
    {
      id: 'writing',
      title: 'Writing',
      projects: Object.values(writing),
    },
  ],
};
