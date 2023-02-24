<template>
  <section id="clients" class="clients">
    <div class="container" data-aos="zoom-out">
      <div class="clients-slider swiper">
        <div class="swiper-wrapper align-items-center">
          <div class="swiper-slide" 
          v-for="(slide, index) in slice.items" :key="index">
            <img 
              v-if="slide?.BrandImage"
              class="img-fluid" 
              :src="asImageSrc(slide.BrandImage)"
              :width="slide?.BrandImage?.dimensions?.width" 
              :height="slide?.BrandImage?.dimensions?.height" 
              :alt="slide?.alt"
            >
          </div>
         
        </div>
      </div>
    </div>
  </section><!-- End Clients Section -->
</template>

<script setup>
  const {asImageSrc} = usePrismic();
  const props = defineProps({
    slice: {
      type: Object,
      required: true
    }
  })
</script>

