<template>
	<input type="text" v-model="newVal">
</template>

<script>
export default {
	props: {
		value: '',
		event: 'change'
	},
	data() {
		return {
			newVal: this.value,
		}
	},
	watch:{
		newVal(val) {
			this.$emit('change',val)
		}
	}
}
</script>

<style>

</style>
