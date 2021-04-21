const Member = require('../model/member.model')

module.exports.index = async (req, res) => {
    let id = req.signedCookies.member_id
    let member = await Member.findById(id).exec()
    res.render('account/index', {
        member: member
    })
}

module.exports.delete = async (req, res) => {
    let id = req.signedCookies.member_id
    console.log(id)
    await Member.deleteOne({_id: id}, function (err, res) {
        if (err) throw err;
        console.log('delete success');
    })
    res.redirect('/login')
}


module.exports.editProfile = async (req, res) => {
    let id = req.signedCookies.member_id
    let member = await Member.findById(id).exec()
    res.render('account/editProfile', {
        member: member
    })
}
module.exports.postEditProfile = async (req, res) => {
    let id = req.signedCookies.member_id
    await Member.findOne({_id: id}, function (err, member) {
        if (err) throw err;
        member.fullName = req.body.fullName
        member.phone = req.body.phone
        member.birthday = req.body.birthday
        member.sex = req.body.sex
        member.job = req.body.job
        member.description = req.body.description
        member.save(function (err, result) {
            if (err) {
                console.log('fail')
            } else {
                console.log('update success')
            }
        })
    })
    res.redirect('/profile')
}

module.exports.avatar = (req, res) => {
    res.render('account/changeAvatar')
}

module.exports.postAvatar = async (req, res) => {
    let id = req.signedCookies.member_id
    await Member.findOne({_id: id}, function (err, member) {
        if (err) throw err;
        member.avatar = req.file.path.split('/').slice(1).join('/')
        member.save(function (err, result) {
            if (err) {
                console.log('fail')
            } else {
                console.log('update success')
            }
        })
    })
    res.redirect('/profile')
}
