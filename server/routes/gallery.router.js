const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM images
                     ORDER BY id;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error making get images  gquery', err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    let count = req.body.like_count + 1
    let queryText = `UPDATE images
                     SET like_count = $1
                     WHERE id = $2`;
    pool.query(queryText, [count, req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Error making update query', err);
            res.sendStatus(500);
        });
});

module.exports = router;