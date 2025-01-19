const express = require('express')
const Project = require('./model')

const router = express.Router()


router.get("/", async (req, res, next) => {
  Project.getProjects()
    .then((project) => {
      res.json(project);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  const project = req.body;
  await Project.addProject(project)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router

//building API so that my local info can get & post info off prem