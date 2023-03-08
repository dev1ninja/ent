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
<div class='w-full px-[121] py-1 flex items-center gap-12 h-[72px]'>
  <img src='../../assets/Logo.svg'  class='mr-[81]'>
  <button v-for="menu in menus" :key="menu" class="font-medium">{{menu}}</button>
  <div class='flex-1'></div>
  <button class='bg-[#0C4A6E] w-[129px] h-[36.88px] rounded-[31px] text-[white] font-medium'>Login</button>
</div>
</template>
