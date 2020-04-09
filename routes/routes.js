const express = require('express')
const router = express.Router()

router.use('/api/test', require('./controllers/tests/index'))

module.exports = router