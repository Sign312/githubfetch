const config = {
	redis: {
		//如果要使用redis存储请把host和password改成自己的
		// host: 'www.flypie.cn',
		// password: 'xxxxxxxxx'
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
		type: 'local',
		//如果要使用redis存储请把host和password改成自己的
		// type: 'redis',
		initUrl: 'http://www.flypie.cn:9999/allList'
	}
}

module.exports = config