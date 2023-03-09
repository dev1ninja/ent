<script lang="ts">
export default {
  data() {
    return {
    }
  },
}
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="w-full h-[740px] flex bg-[url('../assets/Bg.png')] opacity-40 bg-cover"></div>
    <div class="w-full px-28 absolute top-0 left-0 flex flex-col h-[740px]">
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
  </div>
</template>
