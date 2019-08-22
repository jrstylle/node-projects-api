const express = require("express");
const server = express();

server.use(express.json());

let projects = [];

// Routes
server.get("/projects", (request, response) => {
  return response.json(projects);
});

server.post("/projects", (request, response) => {
  const { id, title } = request.body;
  projects.push({
    id: id,
    title: title,
    tasks: []
  });
  return response.json(projects);
});

server.put("/projects/:id", (request, response) => {
  const { id } = request.params;
  const { title } = request.body;
  project = projects.find(project => {
    return (project.id = id);
  });
  project.title = title;
  return response.json(projects);
});

server.delete("/projects/:id", (request, response) => {
  const { id } = request.params;
  const indexProject = projects.findIndex(project => {
    return project.id == id;
  });
  projects.splice(indexProject, 1);
  return response.send();
});

server.post("/projects/:id/tasks", (request, response) => {
  const { id } = request.params;
  const { title } = request.body;
  const project = projects.find(project => {
    return (project.id = id);
  });
  project.tasks.push(title);
  return response.json(projects);
});

server.listen(3001, () => {
  console.log("server running on port 3001");
});
