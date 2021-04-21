const express = require('express')

const auth = require('../controller/auth.controller')

const router = express.Router()

router.get('/login', auth.signIn)
router.get('/signup', auth.signUp)
router.post('/login', auth.postSignIn)
router.post('/signup', auth.postSignUp)
router.post('/logout', auth.logout)
module.exports = router
