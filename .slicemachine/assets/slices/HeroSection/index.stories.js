import MyComponent from '../../../../slices/HeroSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroSection'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"CardIcon":"hide","Label":"ordinary","Link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"Title":[{"type":"heading1","text":"Compass","spans":[]}],"Description":[{"type":"paragraph","text":"Sint ad nisi ex eiusmod anim tempor fugiat est nostrud sit proident. Ipsum esse occaecat aute exercitation ullamco do dolore adipisicing eu cupidatat laboris minim duis qui dolore.","spans":[]}],"CtaButton":"powder","CtaButtonLink":{"link_type":"Web","url":"https://prismic.io"},"RightImage":{"dimensions":{"width":3810,"height":5715},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"},"Video":{"embed_url":"https://twitter.com/prismicio/status/1356293316158095361","author_name":"Prismic","author_url":"https://twitter.com/prismicio","html":"<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Gatsby is a popular choice for Prismic users and we work hard on delivering a CMS that plays to its strengths.<br><br>But, what makes <a href=\"https://twitter.com/GatsbyJS?ref_src=twsrc%5Etfw\">@GatsbyJS</a> so popular?<br><br>Here are some of <a href=\"https://twitter.com/mxstbr?ref_src=twsrc%5Etfw\">@mxstbr</a>&#39;s thoughts on Gatsby&#39;s success and how they&#39;re improving developer experience.<a href=\"https://t.co/ZjCPvsWWUD\">https://t.co/ZjCPvsWWUD</a> <a href=\"https://t.co/EQqzJpeNKl\">pic.twitter.com/EQqzJpeNKl</a></p>&mdash; Prismic (@prismicio) <a href=\"https://twitter.com/prismicio/status/1356293316158095361?ref_src=twsrc%5Etfw\">February 1, 2021</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"http://www.twitter.com/","version":"1.0"},"VideoLink":{"link_type":"Web","url":"http://google.com"}},"id":"_Default","slice_type":"hero_section"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
