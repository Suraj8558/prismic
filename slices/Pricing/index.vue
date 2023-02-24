<template>
<section id="pricing" class="pricing sections-bg">
  <div class="container" data-aos="fade-up">

    <Heading :data="slice.primary"/>

    <div class="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">
      <div class="col-lg-4"  v-for="(price , index) in slice.items" :key="index">
        <div class="pricing-item">
          <h2>{{ price.Heading }}</h2>
          <div class="icon">
            <i :class="`bi bi-${price.icon}`"></i>
          </div> 
         <!-- <h4><sup>$</sup><PrismicRichText :field="price.Amont" /> <span> / 
            <PrismicRichText :field="price.Duration" /></span></h4> -->
            <h4><sup>$</sup>0<span> / month</span></h4>
         
          <!-- <ul>
            <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>
            <li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>
            <li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>
            <li class="na"><i class="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
            <li class="na"><i class="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
          </ul> -->
          <PrismicRichText  
            :field="price.List" 
          />
          <div class="text-center">
            <PrismicLink 
            class="buy-btn"
            :field="price.BuyNowLink">
            {{ price.BuyNow  }}
              
            </PrismicLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { asHTML } from '@prismicio/helpers';

// const {as} = usePrismic()
  const props = defineProps({
    slice : {
      type : [Object,String],
      required: true
    }
  }) 


</script>

