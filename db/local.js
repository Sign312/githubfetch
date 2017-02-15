let redis = require('redis')
let fileCmd = require('file-cmd')
let fs = require('fs')
let path = require('path')
let config = require('../config')
let axios = require('axios')

const db = {}

const localDataPath = path.join(__dirname, 'local.json')

db.getList = async function (language) {
	if (!fs.existsSync(localDataPath)) {
		await db.init()
	}
	let allListJson = await fileCmd.cat(localDataPath)
	let allList = JSON.parse(allListJson.toString())
	return allList[language]
}

db.setList = async function (language, list) {
	if (!fs.existsSync(localDataPath)) {
		await db.init()
	}
	let allListJson = await fileCmd.cat(localDataPath)
	let allList = JSON.parse(localListJson.toString())
	allList = Object.assign({}, allList, {
		language: list
	})
	await fileCmd.rm(localDataPath)
	await fileCmd.cat(localDataPath, JSON.stringify(allList))
}

db.init = function () {
	return new Promise((resolve, reject) => {
		axios.get(config.db.initUrl)
			.then((res) => {
				let dataJson = JSON.stringify(res.data)
				fileCmd.cat(localDataPath, dataJson)
					.then(() => {
						resolve()
					})
			}).catch(err => reject(err))
	})
}

db.init()

module.exports = db