<script lang="ts">
export default {
  props: {
    forumData: Object
  },
  data() {
    return {
    }
  },
}
</script>

<template>
<div class='w-[387px] flex flex-col h-[270px] bg-[white] px-7 py-4 rounded-[33px]'>
  <div class="flex flex-row items-center">
    <img src='@/assets/avatar.svg' class='w-[61px] h-[63px]'>
    <div class="flex flex-col ml-3">
      <text class="text-xl font-bold">
        {{ forumData?.name }}
      </text>
      <text class="text-base font-medium opacity-50">
        {{ forumData?.postDate }}
      </text>
    </div>
  </div>
  <div class="self-center mt-[30px]">
    <div class="w-[288px] h-[80px] font-semibold text-xl">
      {{ forumData?.title }}
    </div>
  </div>
  <div class="flex gap-8 mt-[1rem]">
    <div class="gap-[6px]">
      <button class="mt-5 font-semibold text-base">
        <img v-if="forumData?.myFollowingStatus" src="@/assets/follow.svg" class="w-[23px] h-[23px]" />
        <img v-else src="@/assets/unfollow.svg" class="w-[23px] h-[23px]" />
      </button>
      <text class="font-normal text-lg">{{ forumData?.follows }}</text>
    </div>
    <div class="gap-[6px]">
      <button class="mt-5 font-semibold text-base">
        <img src="@/assets/comment.svg" class="w-[23px] h-[23px]" />
      </button>
      <text class="font-normal text-lg">{{ forumData?.comments }}</text>
    </div>
  </div>
</div>
</template>
