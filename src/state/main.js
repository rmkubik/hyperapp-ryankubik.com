import projects from "./projects";

const { unstable, wildfire, shelloWorld, ...allOtherProjects } = projects;

export default {
  sections: [
    {
      id: "featured",
      title: "Featured Projects",
      projects: Object.values([wildfire, shelloWorld, unstable])
    },
    {
      id: "projects",
      title: "All Projects",
      projects: Object.values(allOtherProjects)
    }
  ]
};
