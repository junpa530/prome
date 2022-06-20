<template>
  <div id="Index">
    <!-- <div>{{obj.a}}</div>
		<div>{{obj.b}}</div> -->
    <AA :a="obj.a" />
    <BB :b="obj.b" />
  </div>
</template>

<script>
import AA from "../components/AA.vue";
import BB from "../components/BB.vue";

export default {
  components: {
    AA,
    BB,
  },
  data() {
    return {
      obj: {
        a: "a",
      },
      arr: [
        { name: "张三", age: 20 },
        { name: "李四", age: 21 },
        { name: "王五", age: 22 },
        { name: "张三丰", age: 20 },
      ],
    };
  },
  created() {
    // setTimeout(() => {
    // 	// this.obj.a = 'a1',
    // 	this.obj.b = 'b1'
    // }, 1000);
	console.log(this.$router.options.routes)
	console.log(this.$router.options.routes.flat())
  },
};
</script>

<style></style>
