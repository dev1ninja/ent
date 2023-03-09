<script lang="ts">
import VideoItem from '../components/VideoItem.vue';
export default {
  components: {
    VideoItem
  },
  data() {
    return {
      videoDatas: [
        { id: 0, title: 'Judul Vidio', desc: 'Deskripsi Lorem Ipsum Bla bla', videoLink: '/assets/small1.png' },
        { id: 1, title: 'Judul Vidio', desc: 'Deskripsi Lorem Ipsum Bla bla', videoLink: '/assets/small2.png' },
        { id: 2, title: 'Judul Vidio', desc: 'Deskripsi Lorem Ipsum Bla bla', videoLink: '/assets/small3.png' },
      ]
    }
  },
}
</script>

<template>
  <div class="w-full px-8 md:px-28 flex flex-col mb-24">
    <div class="text-[white] font-bold text-3xl mt-[100px]">
      Video
    </div>
    <div class="mt-[4px] text-[white] text-xl">
      Berbagai Informasi menarik bersama ENT Crews melalui konten YouTube.
    </div>
    <div class="mt-16 flex gap-10 flex-wrap md:flex-nowrap">
      <div class="min-w-[300px] max-w-[450px]">
        <video class="w-[692px] h-[431px] bg-white rounded-[33px]" controls>
          <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="relative mt-16 md:mt-0 md:ml-32">
        <div class="text-white font-medium text-xl absolute left-0 -top-10">
          Video lainya :
        </div>
        <div class="gap-5 grow flex flex-col">
          <VideoItem v-for="item in videoDatas" :videoData="item" :key="item.id"></VideoItem>
        </div>
      </div>
    </div>
  </div>
</template>
