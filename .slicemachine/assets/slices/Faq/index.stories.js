import MyComponent from '../../../../slices/Faq';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Faq'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"Question":[{"type":"heading3","text":"Managed","spans":[]}],"Answer":[{"type":"paragraph","text":"Ipsum magna ullamco velit commodo pariatur duis et minim laborum minim veniam. Ex officia ut voluptate anim consectetur voluptate enim do elit. Reprehenderit veniam do cupidatat aliquip non elit excepteur laborum aliquip esse.","spans":[]}]}],"primary":{"Title":[{"type":"heading1","text":"Became","spans":[]}],"Description":[{"type":"paragraph","text":"Consectetur laborum ex laboris laboris dolore dolor cillum pariatur non id fugiat.","spans":[]}]},"id":"_Default","slice_type":"faq"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
