<script lang="ts">
import ArticleItemVue from '@/components/ArticleItem.vue';
export default {
  components: {
    ArticleItemVue
  },
  data() {
    return {
      articleData: [
        { id: 0, title: 'Targetkan Lolos ZI-WBK, PENS Helat Sosialisasi dan Internalisasi Pembangunan Zona Integritas', content: 'Tahukah kalian? Bahwa saat ini kebanyakan orang memahami humor tidak jauh berbeda dengan komedi, padahal dua hal tersebut...', url: '' },
        { id: 1, title: 'Mengenal Lebih Jauh tentang Humor dan Relasinya dengan Ketersinggungan', content: 'Tahukah kalian? Bahwa saat ini kebanyakan orang memahami humor tidak jauh berbeda dengan komedi, padahal dua hal tersebut...', url: '' },
        { id: 2, title: 'Targetkan Lolos ZI-WBK, PENS Helat Sosialisasi dan Internalisasi Pembangunan Zona Integritas', content: 'Tahukah kalian? Bahwa saat ini kebanyakan orang memahami humor tidak jauh berbeda dengan komedi, padahal dua hal tersebut...', url: '' },
      ]
    }
  },
}

</script>

<template>
  <div class="w-full px-8 md:px-28 flex flex-col">
    <div class="text-[white] font-bold text-3xl mt-[100px]">
      Artikel Terbaru
    </div>
    <div class="mt-[4px] text-[white] font-normal text-xl">
      Kumpulan artikel terbaru seputar kampus, teknologi, dan tren terkini.
    </div>
    
    <div class="flex gap-4 mt-16 flex-wrap">
      <ArticleItemVue 
        v-for="item in articleData"
        :article="item"
        :key="item.id"
        ></ArticleItemVue>
    </div>
  </div>
</template>
