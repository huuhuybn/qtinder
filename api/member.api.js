const express = require('express')

const Member = require('../model/member.model')

const router = express.Router()

router.get('/member', async(req,res)=>{
    res.send(await Member.find())
})
// router.get('/:id', member.get)
module.exports = router
