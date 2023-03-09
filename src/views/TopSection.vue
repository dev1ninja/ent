<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import TopSection from '../components/TopSectionItem.vue';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    TopSection
  },
  data() {
    return {
      slides: [
        { id: '1', title: 'Media ENT1', content: 'VueJS is a library' },
        { id: '2', title: 'Media ENT2', content: 'Know the components' },
        { id: '3', title: 'Media ENT3', content: 'Rendering Conditionally' },
      ]
    }
  },
}

</script>

<template>
  <Carousel :autoplay="2000">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="w-full">
        <TopSection />
      </div>
    </Slide>
    <template #addons>
      <div class="carousel__pagination">
        <Pagination class="" />
      </div>
    </template>
  </Carousel>
</template>

<style>
.carousel__pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 0;
  margin: 10px 0 0;
  position: absolute;
  bottom: 10px;
}
.carousel__pagination button{
  border: 0;
  margin: 0;
  cursor: pointer;
  padding: 4px;
  background: transparent;
}

.carousel__pagination button::after {
  /* display: block; */
  /* content: ''; */
  width: 40px;
  height: 5px;
  border-radius: 15px;
  background-color: #D5D5D5;
}

.carousel__pagination button:hover::after,
.carousel__pagination-button--active::after {
  background-color: white !important;
}

</style>