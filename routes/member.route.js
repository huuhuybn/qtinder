const express = require('express')

const member = require('../controller/member.controller')

const router = express.Router()

router.get('/', member.index)
router.get('/:id', member.get)
module.exports = router
