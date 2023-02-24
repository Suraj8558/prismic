import MyComponent from '../../../../slices/HeaderTitle';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeaderTitle'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"Title":[{"type":"heading2","text":"Nation","spans":[]}],"Description":[{"type":"paragraph","text":"Laborum mollit nulla culpa deserunt nulla eiusmod non esse quis.","spans":[]}]},"id":"_Default","slice_type":"header_title"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
