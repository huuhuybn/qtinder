const Member = require('../model/member.model')

module.exports.index = async (req, res) => {
    res.render('members/index',
        {
            members: await Member.find()
        })
}

module.exports.get = async (req, res) => {
    let id = req.params.id
    let member = await Member.findById(id).exec()
    console.log(member)
    res.render('members/view', {
        member: member
    })
}

