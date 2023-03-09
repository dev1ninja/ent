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
  <div class="w-full px-28 flex flex-col">
    <div class="text-[white] font-bold text-3xl mt-[100px] ml-[110px]">
      Forum
    </div>
    <div class="mt-[4px] text-[white] text-xl ml-[110px]">
      Wadah komunikasi untuk menambah relasi dan berbagi informasi.
    </div>
    
    <div class="flex gap-5 mt-16">
      <ForumItem
        v-for="item in forumDatas"
        :forumData="item"
        :key="item.id"
      ></ForumItem>
    </div>
  </div>
</template>
