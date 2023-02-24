<template>
  <div>
    <!-- <pre> {{ Homepage.data.slices }} data</pre> -->
    <!-- <pre> about{{ about }}</pre> -->
    <slice-zone 
      v-if="Homepage?.data?.slices"
      :components="components" 
      :slices="Homepage?.data?.slices" 
    />
  </div>
</template>
<script setup>
import {components} from '~/slices/index';
const { client } = usePrismic();
const { data: Homepage } = await useAsyncData('Homepage', () => client.getByUID('page', 'home'))
</script>

<style lang="scss" scoped>

</style>