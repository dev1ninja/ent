<script lang="ts">

export default {
  data() {
    return {
      items: [
        'A',
        'B',
        'C',
      ]
    }
  },
}
import ArticleItem from '@/components/ArticleItem.vue';
</script>

<template>
  <div class="w-full px-28 flex flex-col">
    <div class="text-[white] font-bold text-3xl mt-[100px]">
        Artikel Terbaru
    </div>
    <div class="mt-[4px] text-[white] font-normal text-xl">
        Kumpulan artikel terbaru seputar kampus, teknologi, dan tren terkini.
    </div>
    
    <div class="gap-5">
      <ArticleItem />
    </div>
  </div>
</template>
