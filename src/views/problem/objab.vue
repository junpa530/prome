<template>
	<div id="Index">
		ababab
		<div>{{obj.a}}</div>
		<div>{{obj.b}}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			obj: {
				a: 'a'
			}
		}
	},
	created() {
		// setTimeout(() => {
		// 	this.obj.a = 'a1',
		// 	this.obj.b = 'b1'
		// }, 1000);

		// 问题1
		// for(var a = 0; a < 5; a++) {
		// 	setTimeout(() => {
		// 		console.log(a)
		// 	}, 1000)
		// }
		// console.log(a)

		// 问题2
		// for(let a = 0; a < 5; a++) {
		// 	setTimeout(() => {
		// 		console.log(a)
		// 	}, 1000)
		// }

		// 问题3
		// var arr = []
		// var a
		
		// for(a = 0; a < 5; a++) {
		// 	var p = new promise((resolve, reject) => {
		// 		resolve(a)
		// 	})
		// 	arr.push(p)
		// }
		// Promise.all(arr).then(res => {
			
		// })

	}
}
</script>

<style>

</style>
