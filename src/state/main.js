import projects from "./projects";

const {
  feedbackNight,
  wildfire,
  shelloWorld,
  unstable,
  trainsmission,
  grimRepair,
  ...allOtherProjects
} = projects;

export default {
  sections: [
    {
      id: "featured",
      title: "Featured Projects",
      projects: Object.values([wildfire, feedbackNight, grimRepair])
    },
    {
      id: "projects",
      title: "All Projects",
      projects: [
        shelloWorld,
        unstable,
        trainsmission,
        ...Object.values(allOtherProjects)
      ]
    }
  ]
};
