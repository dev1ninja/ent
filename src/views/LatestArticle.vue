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
  <div class="w-full px-28 flex">
    <text class="text-[white] font-extrabold text-6xl mt-[183px]">
      Media ENT
    </text>
    <div class="w-[570px] h-[132px] mt-[67px] text-[white] font-medium text-topSection">
      Platfom media <text class="text-[#1BB3B5]">
        Jurnalistik
      </text> yang memberi informasi seputar kampus, teknologi, dan berita terkini.
    </div>
    <button class='w-[203px] h-[57px] rounded-[10px] font-semibold text-xl bg-[white]'>
      About <text class="text-[#0C4A6E]">ENT</text>
    </button>
  </div>
</template>
