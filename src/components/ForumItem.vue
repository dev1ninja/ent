<script lang="ts">
export default {
  data() {
    return {
      menus: [
        'Article',
        'Forum',
        'Video',
        'About'
      ]
    }
  },
}
</script>

<template>
<div class='w-[387px] flex flex-col h-[270px] bg-[white] px-7 py-4 rounded-[33px]'>
  <div class="flex flex-row items-center">
    <img src='../assets/avatar.svg' class='w-[61px] h-[63px]'>
    <div class="flex flex-col ml-3">
      <text class="text-xl font-bold">
        Kurniati Hadiyani
      </text>
      <text class="text-base font-medium opacity-50">
        Posted On 16 Nov 22 | 10:44
      </text>
    </div>
  </div>
  <div class="self-center mt-[30px]">
    <div class="w-[288px] h-[80px] font-semibold text-xl">
      Plis isi kekosongan hati gua sekarang, sebelum jadi gerai mixue
    </div>
  </div>
  <div class="flex gap-8 mt-[1rem]">
    <div class="gap-[6px]">
      <button class="mt-5 font-semibold text-base">
        <img src="../assets/follow.svg" class="w-[23px] h-[23px]" />
      </button>
      <text class="font-normal text-lg">356</text>
    </div>
    <div class="gap-[6px]">
      <button class="mt-5 font-semibold text-base">
        <img src="../assets/comment.svg" class="w-[23px] h-[23px]" />
      </button>
      <text class="font-normal text-lg">23</text>
    </div>
  </div>
</div>
</template>
