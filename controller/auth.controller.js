const Member = require('../model/member.model')
const md5 = require('md5')

module.exports.signIn = (req, res) => {
    res.render('auth/signIn')
}

module.exports.signUp = (req, res) => {
    res.render('auth/signUp')
}

module.exports.postSignIn = async (req, res) => {
    let member = await Member.findOne({email: req.body.email}).exec()
    if (!member) {
        res.render('auth/signIn', {
            errors: [
                'Member does node exist'
            ],
            values: req.body
        })
        return
    }
    let md5Pass = md5(req.body.password)
    if (member.password !== md5Pass) {
        res.render('auth/signIn', {
            errors: [
                'Wrong password.'
            ],
            values: req.body
        })
        return
    }
    res.cookie('member_id', member._id, {
        signed: true
    })

    res.redirect('/member')
}
module.exports.postSignUp = async (req, res) => {
    req.body.password = md5(req.body.password)
    await Member.create(req.body)
    res.redirect('/login')
}

module.exports.logout = (req, res) => {
    res.clearCookie('member_id')
    res.redirect('/login')
}
