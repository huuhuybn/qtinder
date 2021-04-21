const express = require('express')
const multer = require('multer')

const account = require('../controller/account.controller')

const upload = multer({dest: './public/uploads/'})

const router = express.Router()

router.get('/', account.index)
router.get('/edit', account.editProfile)
router.get('/avatar', account.avatar)
router.post('/delete', account.delete)
router.post('/edit', account.postEditProfile)
router.post('/avatar', upload.single('avatar'), account.postAvatar)
module.exports = router
