import projects from "./projects";

const {
  feedbackNight,
  wildfire,
  shelloWorld,
  unstable,
  trainsmission,
  ...allOtherProjects
} = projects;

export default {
  sections: [
    {
      id: "featured",
      title: "Featured Projects",
      projects: Object.values([wildfire, feedbackNight, shelloWorld])
    },
    {
      id: "projects",
      title: "All Projects",
      projects: [unstable, trainsmission, ...Object.values(allOtherProjects)]
    }
  ]
};
