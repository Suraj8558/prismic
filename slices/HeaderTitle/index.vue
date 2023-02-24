<template>
  <section class="section" data-aos="fade-up">
    <div class="section-header">
      <PrismicRichText 
        v-if="slice?.primary?.Title"
        :field="slice.primary.Title"
      />
      <PrismicRichText
        v-if="slice?.primary?.Description"
        :field="slice.primary.Description"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  slice: {
    type: Object,
    required: true
  }
})
</script>

