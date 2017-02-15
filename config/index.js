const config = {
	redis: {
		host: 'www.flypie.cn',
		password: '03120019root'
	},
	language: {
		defaultLanguage: 'JavaScript',
		list: [
			'JavaScript',
			'Php',
			'Python',
			'Java',
			'Ruby',
			'HTML',
			'CSS',
			'Go',
			'C++',
			'C',
			'Swift'
		]
	},
	db: {
		// type: 'local',
		type: 'redis',
		initUrl: 'http://www.flypie.cn:9999/allList'
	}
}

module.exports = config