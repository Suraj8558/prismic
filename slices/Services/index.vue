<template>
  <section id="services" class="services sections-bg">
    <div class="container" data-aos="fade-up">
      <div class="row gy-4" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-4 col-md-6"
          v-for="(service , index) in slice.items" :key="index"
        >
          <div class="service-item  position-relative">
            <div class="icon">
              <i :class="`bi bi-${service.Icon}`"></i>
            </div>
          <PrismicRichText :field="service.Title" wrapper="h3" />
          <PrismicRichText :field="service.Description" />
          
          <PrismicLink 
            v-if="service.ReadMoreLink" 
            class="readmore stretched-link" 
            :field="service.ReadMoreLink"
          >
          {{ service.ReadMorelabel}}
          <i class="bi bi-arrow-right"></i>
          </PrismicLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { asImageSrc } = usePrismic();
  const props = defineProps({
    slice: {
      type: Object,
      required: true
    }
  })
</script>

