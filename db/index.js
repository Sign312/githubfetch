let redis = require('redis')
let config = require('../config')

const db = {}

const client = redis.createClient({
	host: config.redis.host,
	password: config.redis.password
})

client.on('error', err => {
	console.error(err)
})

db.setList = (language, list) => {
	return new Promise((resolve, reject) => {
		list = JSON.stringify(list)
		client.set(language, list, (res) => {
			resolve(res)
		})
	})
}

db.getList = language => {
	return new Promise((resolve, reject) => {
		client.get(language, (err, res) => {
			if (err) {
				reject(err)
				return
			}
			if (!res) {
				reject('There is no matching result')
			}
			res = JSON.parse(res)
			resolve(res)
		})
	})
}

module.exports = db