<template>
  <section id="hero" class="hero" v-if="slice.primary">
    <div class="container position-relative">
      <div class="row gy-5" data-aos="fade-in">
        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <!-- <h2>Welcome to <span>Impact</span></h2> -->
          <PrismicRichText :field="slice.primary.Title"/>

          <PrismicRichText :field="slice.primary.Description"/>

          <div class="d-flex justify-content-center justify-content-lg-start">
            <PrismicLink 
              class="btn-get-started"
              :field="slice.primary.CtaButtonLink"
            >    
              {{ slice.primary.CtaButton}}
            </PrismicLink>
  
            <PrismicLink 
              class="glightbox btn-watch-video d-flex align-items-center"
              :field="slice.primary.VideoLink"
            >
              <i class="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </PrismicLink>
            <!-- <PrismicEmbed 
              class="glightbox btn-watch-video d-flex align-items-center"
              :field="slice.primary.Video"
            /> -->
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2">
          <img :src="asImageSrc(slice.primary.RightImage)" 
          
          class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100">
        </div>
      </div>
    </div>

    <div class="icon-boxes position-relative">
      <div class="container position-relative">
        <div class="row gy-4 mt-5">

          <div 
            class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100"
            v-for="(card, index) in slice.items" :key="index"
            
          >
            <div class="icon-box">
              <div class="icon"><i :class="`bi bi-${card?.CardIcon}`"></i></div>
              <h4 class="title">
                <PrismicLink 
                  :field="card.Link"
                  class="stretched-link"
                >
                 
                  {{ card.Label }}
                </PrismicLink> 
              </h4>
            </div>
          </div>
          <!--End Icon Box -->
        </div>
      </div>
    </div>
  </section>
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
 
