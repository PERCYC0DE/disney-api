const express = require('express')
const router = express.Router()

// GET ALL MOVIES
router.get('/', (req, res) => {
    res.send('All movies')
})



module.exports = router;
