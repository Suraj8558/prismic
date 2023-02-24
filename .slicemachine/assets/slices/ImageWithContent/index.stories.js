import MyComponent from '../../../../slices/ImageWithContent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageWithContent'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"Quantity":"edge","Description":[{"type":"paragraph","text":"Sit proident eiusmod veniam. In duis laborum nisi irure enim irure officia do anim deserunt. Exercitation reprehenderit mollit minim do cillum.","spans":[]}]}],"primary":{"MainImage":{"dimensions":{"width":6000,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f"}},"id":"_Default","slice_type":"image_with_content"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
