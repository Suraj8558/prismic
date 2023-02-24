<template>
  <div class="site">
    <TopBar :data="setting?.data"/>
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>
import Header from '/components/Header.vue';
import TopBar from '/components/TopBar.vue';


const { client } = usePrismic();
const { data: setting } = await useAsyncData('Setting', () => client.getSingle('setting'))
</script>
<style lang="scss" scoped>

</style>