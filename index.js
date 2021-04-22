const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:tp230801@cluster0.le1bq.mongodb.net/qtinder')

const authRoute = require('./routes/auth.route')
const memberRoute = require('./routes/member.route')
const accountRoute = require('./routes/account.route')

const memberApi = require('./api/member.api')

const authMiddleware = require('./middleware/auth.middleware')

const app = express()
const hostname = '127.0.0.1'
const port = process.env.PORT || 3000

app.set('view engine', 'pug')
app.set('views', './view')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('cfgxgfxxxxxrxdg'))
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index')
})

app.use('/', authRoute)
app.use('/member', authMiddleware.reqAuth, memberRoute)
app.use('/profile', authMiddleware.reqAuth, accountRoute)

app.use('/api',memberApi)

app.listen(port, () => {
    console.log(`Example app listening at http://${hostname}:${port}`)
})

