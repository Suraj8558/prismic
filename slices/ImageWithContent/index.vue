<template>
  <section id="stats-counter" class="stats-counter">
    <div class="container" data-aos="fade-up">
      <div class="row gy-4 align-items-center">
        <div class="col-lg-6">
          <img 
            class="img-fluid"
            v-if="slice.primary?.MainImage"
            :src="asImageSrc(slice.primary.MainImage)" 
            :width="slice.primary?.MainImage?.width"
            :height="slice.primary?.MainImage?.height"
            :alt="slice.primary.MainImage.alt" 
          >
        </div>
  
        <div class="col-lg-6" v-if="slice?.items">
          <div 
          class="stats-item d-flex align-items-center"
          v-for="(stats, index) in slice.items" :key="index"
          >
            <span data-purecounter-start="0" :data-purecounter-end="`${stats.Quantity}`" data-purecounter-duration="1"
              class="purecounter"></span>
            <PrismicRichText :field="stats.Description"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const {asImageSrc} =  usePrismic();
  const props = defineProps({
    slice: {
      type: Object,
      required: true
    }
  })
</script>

