let fetcher = require('../fetcher')
let db = require('../db')
let config = require('../config')

const service = {}

service.getList = async function (language) {
	language = language ? language : config.language.defaultLanguage
	let list = await db.getList(language)
	return list
}

service.updateList = async function () {

}

module.exports = service