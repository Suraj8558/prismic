<template>
  <section class="section" data-aos="fade-up">
    <div class="section-header">
      <PrismicRichText v-if="slice?.Title" :field="slice.Title" />
      <PrismicRichText v-if="slice?.Description" :field="slice.Description" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const slice = toRef(props, "data");

</script>

