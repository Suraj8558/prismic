<template>
  <section id="call-to-action" class="call-to-action">
    <div v-if="slice.primary?.BackgroundImage?.url" class="container text-center" data-aos="zoom-out" 
    :style="`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${slice.primary.BackgroundImage.url}') center center`">
      <PrismicLink 
        v-if="slice.primary?.VideoLink"
        :field="slice.primary.VideoLink"
        :class="`glightbox ${slice.primary?.VideoIcon}`"
      >
      </PrismicLink>

      <PrismicRichText :field="slice.primary.Title" wrapper="h3"/>
      
      <PrismicRichText :field="slice.primary.Description"/>

      <PrismicLink 
        class="cta-btn" 
        v-if="slice.primary?.ActionLink"
        :field="slice.primary?.ActionLink"
      >
        {{slice.primary?.ActionLabel }}
      </PrismicLink>
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

