const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

require('../../../db/index')
const { Tests } = require('../../../db/models/tests/testSchema')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser())

router.get('/', async(req, res) => {
    return res.status(200).json({ successes: true})
})

router.post('/', async(req, res) => {
    
    const { username, email } = req.body
    const user = new Tests({ username, email })
    await user.save(async (err, data) =>{
        if(err || !data) return res.status(200).json({successes: false})
        else return res.status(200).json({successes: true, data})
    })
})

module.exports = router