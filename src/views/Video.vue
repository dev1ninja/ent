<script lang="ts">
import VideoItem from '../components/VideoItem.vue';
export default {
  components: {
    VideoItem
  },
  data() {
    return {
      videoDatas: [
        { id: 0, title: 'Judul Vidio', desc: 'Deskripsi Lorem Ipsum Bla bla', videoLink: '@/assets/small1.png' },
        { id: 1, title: 'Judul Vidio', desc: 'Deskripsi Lorem Ipsum Bla bla', videoLink: '@/assets/small2.png' },
        { id: 2, title: 'Judul Vidio', desc: 'Deskripsi Lorem Ipsum Bla bla', videoLink: '@/assets/small3.png' },
      ]
    }
  },
}
</script>

<template>
  <div class="w-full px-28 flex flex-col mb-[120px]">
    <div class="text-[white] font-bold text-3xl mt-[100px] ml-[110px]">
      Video
    </div>
    <div class="mt-[4px] text-[white] text-xl ml-[110px]">
      Berbagai Informasi menarik bersama ENT Crews melalui konten YouTube.
    </div>
    <div class="mt-10 ml-[830px] text-white font-medium text-xl">
      Video lainya :
    </div>
    <div class="mt-6 flex">
      <div>
        <video class="w-[692px] h-[431px] bg-white rounded-[33px]" autoplay>
          <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="ml-[100px] gap-5 flex flex-col">
        <VideoItem v-for="item in videoDatas" :videoData="item" :key="item.id"></VideoItem>
      </div>
    </div>
  </div>
</template>
