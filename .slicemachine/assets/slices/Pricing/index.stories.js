import MyComponent from '../../../../slices/Pricing';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Pricing'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"Heading":[{"type":"heading3","text":"Brave","spans":[]}],"icon":"happen","Amont":[{"type":"paragraph","text":"Tempor aute aute ex pariatur commodo nostrud. Excepteur dolor excepteur minim ipsum voluptate duis. Commodo laboris anim incididunt veniam officia ad officia est exercitation commodo ad.","spans":[]}],"Duration":[{"type":"paragraph","text":"Ut velit occaecat exercitation excepteur cillum occaecat qui officia proident duis sunt velit culpa quis nulla. Excepteur sit officia est adipisicing commodo nostrud sit sint.","spans":[]}],"List":[{"type":"paragraph","text":"Eiusmod laboris eu consequat exercitation magna dolor. Dolor ea mollit nisi tempor duis nulla minim duis nulla. Est tempor anim Lorem laborum minim amet excepteur nisi consectetur anim.","spans":[]}],"BuyNow":"had","BuyNowLink":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"Title":[{"type":"heading3","text":"Major","spans":[]}],"Description":[{"type":"paragraph","text":"Laboris ex sint duis ut dolor aliquip laborum ad. Magna minim in sit culpa veniam anim ad consectetur excepteur deserunt occaecat enim tempor eu.","spans":[]}]},"id":"_Default","slice_type":"pricing"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
