<script lang="ts">
import ForumItem from '@/components/ForumItem.vue';
export default {
  components: {
    ForumItem
  },
  data() {
    return {
      forumDatas: [
        { id: 0, name: 'Kurniati Hadiyani', postDate: 'Posted On 18 Nov 22 | 10:44', title: 'Qoute favorit kamu apa sih ?', follows: 300, comments: 30, myFollowingStatus: false, myCommentStatus: false },
        { id: 1, name: 'Alfian Aditya', postDate: 'Posted On 18 Nov 22 | 10:44', title: 'Bapak kamu pasti anak ENT', follows: 300, comments: 30, myFollowingStatus: true, myCommentStatus: false },
        { id: 2, name: 'Budi Harun', postDate: 'Posted On 18 Nov 22 | 10:44', title: 'Plis isi kekosongan hati gua sekarang, sebelum jadi gerai mixue', follows: 300, comments: 30, myFollowingStatus: false, myCommentStatus: false },
      ]
    }
  },
}
</script>

<template>
  <div class="w-full px-8 md:px-28 flex flex-col">
    <div class="md:ml-1 text-white mb-10 px-8 md:pl-24 mt-[100px] flex flex-col tablet:justify-center">
      <text class="text-lg md:text-2xl font-bold">Forum</text>
      <text class="text-xl md:text-sm font-normal">Wadah komunikasi untuk menambah relasi dan berbagi informasi.</text>
    </div>
    
    <div class="tablet:flex-wrap tablet:flex gap-4 container tablet:justify-center mx-auto">
      <ForumItem
        v-for="item in forumDatas"
        :forumData="item"
        :key="item.id"
      ></ForumItem>
    </div>
  </div>
</template>
