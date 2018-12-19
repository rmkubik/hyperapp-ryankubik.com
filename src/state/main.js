import projects from './projects';

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
  ],
};
