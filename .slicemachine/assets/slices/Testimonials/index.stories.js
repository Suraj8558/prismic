import MyComponent from '../../../../slices/Testimonials';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Testimonials'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"Profile":{"dimensions":{"width":2747,"height":4120},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"},"Author":[{"type":"paragraph","text":"Fugiat dolor ex in ipsum id et deserunt velit. Anim occaecat veniam dolore pariatur incididunt sit velit occaecat consequat anim quis ullamco nisi sunt.","spans":[]}],"Designation":[{"type":"paragraph","text":"Ad ex nostrud quis.","spans":[]}],"Raiting":"1","Description":[{"type":"paragraph","text":"Pariatur eiusmod minim cupidatat excepteur adipisicing cupidatat cillum officia nisi est et Lorem non deserunt labore. Anim amet veniam sit dolor dolore culpa consectetur laboris consequat veniam veniam mollit officia Lorem.","spans":[]}]}],"primary":{"Title":[{"type":"heading4","text":"Station","spans":[]}]},"id":"_Default","slice_type":"testimonials"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
