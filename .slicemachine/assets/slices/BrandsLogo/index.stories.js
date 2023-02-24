import MyComponent from '../../../../slices/BrandsLogo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BrandsLogo'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"BrandImage":{"dimensions":{"width":86,"height":65},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?rect=16%2C0%2C4128%2C3120&w=86&h=65"}}],"primary":{"Title":"spirit"},"id":"_Default","slice_type":"brands_logo"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
