import MyComponent from '../../../../slices/Team';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Team'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"Profie":{"dimensions":{"width":3810,"height":5715},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"},"Author":[{"type":"paragraph","text":"Duis labore ex eu commodo sint adipisicing ea nostrud nostrud duis non sit anim nisi sunt.","spans":[]}],"Designation":[{"type":"paragraph","text":"Anim culpa incididunt anim id quis pariatur laborum elit tempor ullamco. Voluptate quis dolore laborum nostrud cillum deserunt reprehenderit exercitation excepteur.","spans":[]}],"SocailMedia":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{},"id":"_Default","slice_type":"team"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
