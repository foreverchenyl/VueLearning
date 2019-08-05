Vue Learning Demo



## Libraries

- [Vuex](https://vuex.vuejs.org) : Centralized State Management for Vue.js
- [Vue-router](http://router.vuejs.org/) : The official router for Vue.js
- [Superagent](https://github.com/visionmedia/superagent) : Ajax with less suck - (and node.js HTTP client to match)
- [vue-infinite-loading](https://github.com/PeachScript/vue-infinite-loading) : An infinite scroll plugin for Vue.js 1.0 & Vue.js 2.0.
- [normalize.css](https://github.com/necolas/normalize.css) :  A collection of HTML element and attribute style-normalizations
- [vue-scroll-behavior](https://www.npmjs.com/package/vue-scroll-behavior) :  Completely customize the scroll behavior on route navigation

## API

Douban Api V2
- Basic URI : `https://api.douban.com/V2/`
- Online activities
  - Activities list : `/event/list?loc=108288&count=&start=`
  - Single activitie info : `/event/id`
- Movie
  - In theaters : `/movie/in_theaters?count=`
  - Coming soon : `/movie/coming_soon?count=`
  - Top 250 : `/movie/top250?count=`
  - Single movie info : `/movie/subject/id`
- Search
  - Search books : `/book/search?q=`
  - Search movie : `/movie/search?q=`
  - Search music : `/music/search?q=`

For detailed explanation, checkout the [Douban Api V2](https://developers.douban.com/wiki/?title=api_v2) and [Douban Backend](https://github.com/jeneser/douban-backend)


