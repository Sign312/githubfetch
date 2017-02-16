let fetcher = require('../fetcher')
let fileCmd = require('file-cmd')
let config = require('../config')

let db = config.db.type == 'local' ? require('../db/local') : require('../db')

const service = {}

service.getList = async function (language) {
	language = language ? language : config.language.defaultLanguage
	let list = await db.getList(language)
	return list
}

service.getAllList = async function () {
	let allList = {}
	for (let i = 0; i < config.language.list.length; ++i) {
		let item = config.language.list[i]
		let list = await db.getList(item)
		allList[item] = list
	}
	return allList
}

service.updateList = async function () {
	for (let i = 0; i < config.language.list.length; ++i) {
		let item = config.language.list[i]
		let list = []
		if (item == 'C++') {
			list = await fetcher.getList('Cpp')
		} else {
			list = await fetcher.getList(item)
		}
		await db.setList(item, list)
		//每发一次请求等待3秒避免被GitHub发现
		await fileCmd.wait(3000)
	}
}

module.exports = service