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

router.put('/', (req, res) => {
    let queryText = `UPDATE images
                     SET image_display = true, text_display = false;`;
    pool.query(queryText)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Error making update query', err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    let count = req.body.like_count + 1
    let queryText = `UPDATE images
                     SET like_count = $1
                     WHERE id = $2;`;
    pool.query(queryText, [count, req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Error making update query', err);
            res.sendStatus(500);
        });
});


router.put('/view/:id', (req, res) => {
    let block = req.body
    if (block.image_display === true) {
        let count = req.body.view_count + 1
        let queryText = `UPDATE images
                         SET view_count = $1, image_display = false, text_display = true
                         WHERE id = $2;`;
        pool.query(queryText, [count, req.params.id])
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((err) => {
                console.log('Error making update query', err);
                res.sendStatus(500);
            });
    }
    else if (block.image_display === false) {
        let queryText = `UPDATE images
                         SET image_display = true, text_display = false
                         WHERE id = $1;`;
        pool.query(queryText, [req.params.id])
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((err) => {
                console.log('Error making update query', err);
                res.sendStatus(500);
            });
    }
});

module.exports = router;