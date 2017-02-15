let Router = require('koa-router')

let router = new Router()

let service = require('../service')

router.get('/list', async function (next) {
	try {
		let list = await service.getList(this.query.language)
		this.body = list
	} catch (e) {
		this.throw(e, 404)
	}
	await next
})

module.exports = router