<template>
  <header id="header" class="header d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <h1 v-if="header?.data?.Title">{{ header.data.Title }}<span>.</span></h1>
        <img 
          v-else
          :src="asImageSrc(header.data.Logo)" 
          :alt="header?.data?.logo?.alt"
          :width="header?.data?.logo?.dimensions?.width"
          :height="header?.data?.logo?.dimensions?.height"
        >
      </a>
      <nav id="navbar" class="navbar" v-if="header?.data?.SelectMenu?.data?.Menu">
        <ul>
          <li
            v-for="(menu, menuIndex) in header.data.SelectMenu.data.Menu" :key="menuIndex"
            :class="menu.SubMenu.data ? 'dropdown': ''"
            >
            <PrismicLink :field="menu.MenuLink">
              {{ menu.MenuLabel }}
              <i class="bi bi-chevron-down dropdown-indicator" v-if="menu?.SubMenu?.data"> </i>
            </PrismicLink>
            <ul v-if="menu?.SubMenu?.data">
              <li v-for="(submenu, sindex) in menu?.SubMenu?.data?.Menu" :key="sindex">
                <PrismicLink :field="submenu.MenuLink">
                {{ submenu.MenuLabel }}
              </PrismicLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav><!-- .navbar -->

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
</template>

<script setup>  
import { onMounted } from 'vue';
const {client, asImageSrc} = usePrismic();
const { data: header } = await useAsyncData('header', () => client.getSingle('header', 
  { fetchLinks: "menu.Menu"}) )

function menuInit() {
  let Header = document.getElementById('header')
  let HeaderoffsetTop = Header.offsetTop;
  if(Header) {
    const fixedHeader = ()=> {
      if ((HeaderoffsetTop - window.scrollY) <= 0) {
        Header.classList.add('sticked')
      }else {
        Header.classList.remove('sticked')
      }
    } 
    window.addEventListener('load', fixedHeader)
    document.addEventListener('scroll', fixedHeader) 


    let menuBar = document.querySelector('.mobile-nav-show');
    let closebtn = document.querySelector('.mobile-nav-hide');

    if (menuBar) {
      menuBar.addEventListener('click', () => {
        document.querySelector('body').classList.add('mobile-nav-active');
        menuBar.classList.add('d-none');
        closebtn.classList.remove('d-none')
      })

      closebtn.addEventListener('click', ()=> {
        document.querySelector('body').classList.remove('mobile-nav-active');
        menuBar.classList.remove('d-none');
        closebtn.classList.add('d-none')
      }) 
    }
    console.log(menuBar);
  } 
};

// onMounted(()=> menuInit())
</script>

<style lang="scss" scoped>

</style>