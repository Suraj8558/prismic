<template>
<section id="team" class="team">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>Our Team</h2>
      <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem
        dolore earum</p>
    </div>

    <div class="row gy-4">
      <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100" 
        v-for="(team, index) in slice.items" :key="index"
      >
        <div class="member">
          <img 
            :src="asImageSrc(team.Profie)" 
            class="img-fluid"
            alt=""
          >

          <PrismicRichText 
            :field="team.Author" 
            wrapper="h3"
           />
          <PrismicRichText :field="team.Designation" />

          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
</template>

<script setup>
const {asImageSrc} = usePrismic();
  const props =  defineProps({
    slice: {
      type: Object,
      required : true
    }
  })
</script>


