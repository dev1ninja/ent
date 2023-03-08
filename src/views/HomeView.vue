<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import TopSection from './TopSection.vue'
import LatestArticle from './LatestArticle.vue'
import ArticleItemVue from '@/components/ArticleItem.vue'
import ForumItem from '@/components/ForumItem.vue'
import VideoItem from '@/components/VideoItem.vue'
</script>

<template>
  <main>
    <Header />
    <TopSection />
    <ArticleItemVue />
    <ForumItem />
    <VideoItem />
    <LatestArticle />
    <Footer />
  </main>
</template>
