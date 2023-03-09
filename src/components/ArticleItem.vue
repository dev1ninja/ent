<script lang="ts">
export default {
  props: {
    article: Object
  },
  data() {
    return {
      
    }
  },
}
</script>

<template>
<div class='w-[347px] flex flex-col h-[469px] bg-[white] px-5 pt-4 rounded-3xl relative'>
  <img src='/assets/sub1.png' class='w-full'>
  <button class="w-[70px] h-[31px] mt-3 rounded-[30px] bg-[#0C4A6E] font-semibold text-xs text-white">Lifestyle</button>
  <div class="w-full font-bold text-base mt-3">
    {{ article?.title }}
  </div>
  <div class="w-full mt-5" style="font-size: 15px; line-height: 18px;">
    {{ article?.content }}
  </div>
  <div class="flex mt-5 justify-end cursor-pointer absolute bottom-4 right-8">
    <a class="font-semibold text-base" href="">Read More</a>
  </div>
</div>
</template>
