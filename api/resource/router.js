const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    Resource.getAll()
    .then((data) => {
        res.json(data);
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
    const resource = req.body;

    Resource.addResource(resource)
    .then((resource) => {
        res.status(201).json(resource);
    })
    .catch(next);
})

module.exports = router