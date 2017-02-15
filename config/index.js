const config = {
	redis: {
		host: 'www.flypie.cn',
		password: '03120019root',
		// host: 'localhost'
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
		initUrl: '/allList'
	}
}

module.exports = config