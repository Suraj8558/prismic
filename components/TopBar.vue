<template>
  <section id="topbar" class="topbar d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="d-flex align-items-center" :class="`bi bi-${header?.EmailIcon}`">
          <!-- <a href="mailto:contact@example.com">contact@example.com</a> -->
          <PrismicLink 
            v-if="header?.Email"
            :field="header?.Email">
            contact@example.com
          </PrismicLink> 
        </i>

        <i class="d-flex align-items-center ms-4" :class="`bi bi-${header?.PhoneIcon}`">
          <span v-html="header?.Phone"></span>
        </i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center" v-if="header?.Socail">
        <PrismicLink 
          v-for=" (icon, index) in header?.Socail" :key="index"
          :field="icon.IconLink"
          >
          <i :class="`bi bi-${icon.icon} ${icon.icon}`"></i>
        </PrismicLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const {asHTML} = usePrismic();
const props = defineProps({
  data: {
    type: Object,
    required: true,
    defult() {
      return {};
    },
  },
})

const header = toRef(props, "data");
</script>
<style lang="scss" scoped>

</style>