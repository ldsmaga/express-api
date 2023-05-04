const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET request')
})

router.post('/', (req, res) => {
    res.send('POST request')
})

router.put('/', (req, res) => {
    res.send('PUT request')
})

router.delete('/', function (req, res) {
    res.send('Got a DELETE request at /user');
})

module.exports = router;