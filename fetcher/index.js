let axios = require('axios')
let cheerio = require('cheerio')

let githubBaseUrl = 'https://github.com'

const fetcher = {}

fetcher.getList = language => {
	return new Promise((resolve, reject) => {
		let baseUrl = `https://github.com/search?l=${language}&q=stars%3A%3E1000&type=Repositories&ref=searchresults`
		axios.get(baseUrl).then(res => {
			resolve(data2list(res.data))
		}).catch(err => {
			reject(err)
		})
	})
}

function data2list(res) {
	let $ = cheerio.load(res)
	let items = $('li.public.source')
	let list = []
	for (let i = 0; i < items.length; ++i) {
		let item = items.eq(i)
		list.push({
			name: item.find('a.v-align-middle').text(),
			url: githubBaseUrl + item.find('a.v-align-middle').attr('href'),
			star: parseInt(excepetComma(item.find('a[aria-label=Stargazers]').text())),
			language: (item.find('.f6.text-gray.mt-2 span.mr-3').text()).trim(),
			description: (item.find('p.col-9.text-gray').text()).trim()
		})
	}
	return list
}

function excepetComma(s) {
	let ss = s.split(',')
	let sss = ss.join('')
	return sss
}

module.exports = fetcher