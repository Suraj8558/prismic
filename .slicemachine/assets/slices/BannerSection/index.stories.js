import MyComponent from '../../../../slices/BannerSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BannerSection'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"BackgroundImage":{"dimensions":{"width":3935,"height":5894},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636"},"VideoLink":{"link_type":"Web","url":"http://twitter.com"},"VideoIcon":"create","Title":[{"type":"heading1","text":"Typical","spans":[]}],"Description":[{"type":"paragraph","text":"Duis exercitation dolor consequat duis dolore do proident deserunt excepteur nostrud excepteur officia nisi adipisicing.","spans":[]}],"ActionLabel":"pride","ActionLink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_Default","slice_type":"banner_section"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
