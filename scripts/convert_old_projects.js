const fs = require('fs');
const old = require('./old_projects.json');

const projects = old.map(section =>
  section.projects.map(project => ({
    title: project.name,
    thumbnail: {
      src: project.img,
      blurb: project.desc,
    },
  })));

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) => (Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)),
    [],
  );
}

const flattenedProjects = flattenDeep(projects);

const projectMap = {};
flattenedProjects.forEach((project) => {
  const concatKey = project.title.replace(/\s/g, '');
  const key = `${concatKey[0].toLowerCase()}${concatKey.slice(1)}`;
  projectMap[key] = project;
});

const output = `export default ${JSON.stringify(projectMap, null, 2)}`;

fs.writeFile('scripts/test.js', output, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});
