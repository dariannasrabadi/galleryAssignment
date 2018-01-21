const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
    let queryText = `SELECT * FROM comments
                     WHERE image_id = $1
                     ORDER BY id;`;
                     console.log(req.params.id);
                     
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error making get comments query', err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    let queryText = `UPDATE comments
                     SET comment_status = false
                     WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Error making update comments query', err);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    let queryText = `UPDATE comments
                     SET comment_status = true;`;
    pool.query(queryText)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Error making update comments status query', err);
            res.sendStatus(500);
        });
});

module.exports = router;