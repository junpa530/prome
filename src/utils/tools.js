export function formatDate(type) {// 获取当前时间
	var d = new Date()
	var year = d.getFullYear()
	var month = d.getMonth() + 1
	var day = d.getDate()
	var hour = d.getHours()
	var minute = d.getMinutes()
	var second = d.getSeconds()
	if (month < 10) {
		month = '0' + month
	}
	if (day < 10) {
		day = '0' + day
	}
	if (hour < 10) {
		hour = '0' + hour
	}
	if (minute < 10) {
		minute = '0' + minute
	}
	if (second < 10) {
		second = '0' + second
	}
	switch(type) {
		case 1:	// 2022-06-20
			return year + '-' + month + '-' + day;
		case 2:	// 20220620
			return '' +year + month + day;
		case 3:	// 2022/06/20
			return year + '/' + month + '/' + day;
		default: // 2022-06-20 15:05:40
			return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
	}

  }