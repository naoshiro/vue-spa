<template>
  <div class="container">
    <h1>
      {{$route.title}}
      <small>(template: index.vue)</small>
    </h1>
    <compnav></compnav>
  </div>
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
