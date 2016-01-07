<template lang="jade">
.container
  h1
    | {{$route.title}}
    small (template: index.vue)
  compnav
</template>

<script>
import compnav from "./components/nav.vue"

export default {
  data () {
    return {
      title: "INDEX"
    }
  },
  components: {
    compnav
  }
}
</script>
