const express = require('express')
const router = express.Router()

// GET ALL USERS
router.get('/', (req, res) => {
    res.send('All Users')
})


module.exports = router