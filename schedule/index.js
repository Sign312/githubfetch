let nodeSchedule = require('node-schedule')
let service = require('../service')

//每小时的40分钟执行
let rule = new nodeSchedule.RecurrenceRule()
rule.minute = 40

let schedule = {}

schedule.start = () => {
	schedule.job = nodeSchedule.scheduleJob(rule, () => {
		service.updateList()
	});
}

module.exports = schedule