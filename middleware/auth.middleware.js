const Member = require('../model/member.model')

module.exports.reqAuth = async (req, res, next) => {
    let id = req.signedCookies.member_id
    if (!id) {
        res.redirect('/login')
        return
    }
    let member = await Member.findOne({_id: req.signedCookies.member_id})
    if (!member) {
        res.redirect('/login');
        return
    }

    res.locals.acc = member;

    next()
}
