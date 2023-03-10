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
    <div class="md:ml-1 text-white mb-10 px-8 md:pl-24 mt-[100px] flex flex-col tablet:justify-center">
      <text class="text-lg md:text-2xl font-bold">Video</text>
      <text class="text-xl md:text-sm font-normal">Berbagai Informasi menarik bersama ENT Crews melalui konten
        YouTube.</text>
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
    <!-- <div class="container mx-auto my-auto px-6 pb-12 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center"> -->
      <!-- <div class="container mx-auto md:p-4 sm:justify-center">
        <div class="grid grid-cols-3">
          <div class="grid col-span-3 md:grid md:col-span-2">

          </div>
        <div class="md:grid grid-none col-span-3 md:col-span-1 flex md:flex">
          <div class="md:flex mx-1">
            <p class="ml-0 md:ml-5 text-white text-xs mb-1 md:mb-4">Kuliner Legendaris di Surabaya - Rawon Pak Pangat
            </p>
          </div>
          <div class="md:flex mx-1">
            <p class="ml-0 md:ml-5 text-white text-xs mb-1 md:mb-4">5 Teknologi yang akan mengubah Masa Depan</p>
          </div>
          <div class="md:flex mx-1">
            <p class="ml-0 md:ml-5 text-white text-xs mb-1 md:mb-4">Museum Surabaya: Saksi Bisu Sejarah</p>
          </div>
        </div>
      </div>
    </div> -->