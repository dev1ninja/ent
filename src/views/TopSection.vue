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
      <Pagination />
    </template>
  </Carousel>
</template>