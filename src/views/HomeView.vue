<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import TopSection from './TopSection.vue'
import LatestArticle from './LatestArticle.vue'
import Forum from './Forum.vue'
import Video from './Video.vue'
</script>

<template>
  <main>
    <Header />
    <TopSection />
    <LatestArticle />
    <Forum />
    <Video />
    <Footer />
  </main>
</template>
