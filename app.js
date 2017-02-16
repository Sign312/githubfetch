let Koa = require('koa')
let cors = require('koa-cors')
let bodyparser = require('koa-bodyparser')
var path = require('path')
let autoRoutes = require('koa-auto-routes')
let koaStatic = require('koa-static')
let schedule = require('./schedule')

let app = new Koa()

app.use(koaStatic(path.join(__dirname, 'public')))

app
	.use(cors())
	.use(bodyparser())

autoRoutes(app, path.join(__dirname, 'routers'))

schedule.start()

app.listen(9999)
