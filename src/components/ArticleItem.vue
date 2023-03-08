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
<div class='w-[387px] flex flex-col h-[469px] bg-[white] px-5 pt-4 rounded-3xl'>
  <img src='../assets/sub1.png' class='w-[349px] h-[225px]'>
  <button class="w-[70px] h-[31px] mt-3 rounded-[30px] bg-[#0C4A6E] font-semibold text-xs text-white">Lifestyle</button>
  <div class="font-bold text-base mt-3">
    Targetkan Lolos ZI-WBK, PENS Helat Sosialisasi dan Internalisasi Pembangunan Zona Integritas
  </div>
  <div class="mt-3" style="font-size: 15px; line-height: 18px;">
    Tahukah kalian? Bahwa saat ini kebanyakan orang memahami humor tidak jauh berbeda dengan komedi, padahal dua hal tersebut...
  </div>
  <div class="flex mb-[15px] justify-end">
    <a class="font-semibold text-base">Read More</a>
  </div>
</div>
</template>
