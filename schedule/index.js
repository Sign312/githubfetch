let nodeSchedule = require('node-schedule')
let service = require('../service')

//每小时的40分钟执行
let rule = new nodeSchedule.RecurrenceRule()
rule.minute = 40

let schedule = {}

schedule.start = () => {
	//开始任务的时候先更新一次
	service.updateList()
	//注册定时任务
	schedule.job = nodeSchedule.scheduleJob(rule, () => {
		service.updateList()
	});
}

module.exports = schedule