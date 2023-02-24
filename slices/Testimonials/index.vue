<template>
  <section id="testimonials" class="testimonials">
    <div class="container" data-aos="fade-up">
      <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(testimonial, index) in slice.items" :key="index">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <div class="d-flex align-items-center">
                  <img 
                    :src="asImageSrc(testimonial.Profile)" 
                    :alt="testimonial.Profile?.alt"
                    class="testimonial-img flex-shrink-0"
                  >
                  <div>
                    
                    <PrismicText 
                      :field="testimonial.Author"
                       wrapper="h3"
                     />

                    <PrismicText 
                      :field="testimonial.Designation" 
                      wrapper="h4"
                    />

        
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <PrismicText 
                    :field="testimonial.Description" 
                    wrapper=""
                   />
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
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

