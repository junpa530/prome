<template>
  <div class="recommendPage">
    <carousel-3d
      :perspective="35"
      :display="5"
      :space="2-"
      :animationSpeed="400"
      :width="300"
      :height="270"
      controlsVisible
      :controlsHeight="60"
    >
      <slide v-for="(item, i) in imgs" :index="i" :key="i">
        <template slot-scope="obj">
          <img :src="item" @click="imgClick(item, obj)" />
        </template>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  name: "componentForView",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      imgs: [
        require("../assets/1.png"),
        require("../assets/1.png"),
        require("../assets/1.png"),
        require("../assets/1.png"),
        require("../assets/1.png"),
      ],
      swiperOption: {
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        slidesPerView: 5,
        effect: "coverflow",
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: -200,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
      },
    };
  },
};
</script>

<style scoped>
.img {
  width: 400px;
}
</style>
