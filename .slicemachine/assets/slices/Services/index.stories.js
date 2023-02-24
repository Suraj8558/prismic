import MyComponent from '../../../../slices/Services';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Services'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"Icon":"signal","Title":[{"type":"paragraph","text":"Irure nulla Lorem incididunt veniam veniam excepteur id do est proident fugiat laboris sit veniam eiusmod. Anim veniam amet ipsum.","spans":[]}],"Description":[{"type":"paragraph","text":"Do duis aliqua duis ad laboris commodo deserunt nulla exercitation tempor fugiat.","spans":[]}],"ReadMorelabel":"coming","ReadMoreLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"Title":[{"type":"heading1","text":"Purpose","spans":[]}]},"id":"_Default","slice_type":"services"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
