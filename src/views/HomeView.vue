<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import LatestArticle from './LatestArticle.vue'
import Forum from './Forum.vue'
import Video from './Video.vue'
import TopSection from './TopSection.vue'
</script>

<template>
  <main>
    <Header />
    <TopSection />
    <LatestArticle />
    <div class="h-[80px]"></div>
    <Forum />
    <div class="h-[80px]"></div>
    <Video />
    <Footer />
  </main>
</template>
