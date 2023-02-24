import MyComponent from '../../../../slices/Blog';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Blog'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Disappear","spans":[]}],"description":[{"type":"paragraph","text":"Ipsum veniam proident elit consequat aliquip sit quis tempor nisi labore veniam.","spans":[]}]},"id":"_Default","slice_type":"blog"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
