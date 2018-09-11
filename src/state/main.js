import projects from './projects';

export default {
  sections: [
    {
      id: 'featured',
      title: 'Featured Projects',
      projects: ['unstable', 'trainsmission', 'eclipse'],
    },
    {
      id: 'projects',
      title: 'All Projects',
      projects: Object.keys(projects),
    },
    {
      id: 'writing',
      title: 'Writing',
      projects: [],
    },
  ],
};
