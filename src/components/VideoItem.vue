<script lang="ts">
export default {
  props: {
    videoData: Object
  }
}
</script>

<template>
<div class='w-[410px] flex flex-row h-[120px]'>
  <img src="/assets/small1.png" class='w-[204px] h-[120px] rounded-[10px]'> 
  <div class="ml-5">
    <div class="font-medium	text-xl text-white">
      {{ videoData?.title }}
    </div>
    <div class="mt-[18px] text-white" style="font-size: 14px; line-height: 17px;">
      {{ videoData?.desc }}
    </div>
  </div>
</div>
</template>