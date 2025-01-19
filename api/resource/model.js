const db = require('../../data/dbConfig');

function getAll() {
    return db('resources');
}

async function addResource(resource) {
    return db('resources')
    .insesrt(resource)
    .then(([resource_id]) => {
        return db('resources')
        .where('resource_id', resource_id)
        .first();
    })
}

module.exports = {
    getAll,
    addResource
}