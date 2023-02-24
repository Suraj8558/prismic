import MyComponent from '../../../../slices/ContentSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContentSection'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"Title":[{"type":"heading3","text":"Split","spans":[]}],"Description":[{"type":"paragraph","text":"Est non esse consequat ex officia anim labore quis officia tempor mollit ullamco eiusmod ea officia.","spans":[]}],"ListStyle":"square"},"id":"_Default","slice_type":"content_section"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
