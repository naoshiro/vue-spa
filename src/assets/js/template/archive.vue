<template>
  <div class="container">

    <h1>
      {{$route.title}}
      <small>(template: archive.vue)</small>
    </h1>

    <compnav></compnav>

    <div class="row">
      <div class="col-sm-4" v-for="v in spot">
        <div class="card">
          <img class="card-img-top img-fluid" v-bind:src="'assets/img/' + v.photo" v-bind:alt="v.name">
          <div class="card-block">
            <h2 class="card-title">{{v.name}}</h2>
            <p class="card-text">{{v.comment}}</p>
            <a class="btn btn-primary" v-link="{ path: v.id, append: true}">詳細はこちら</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>


<script>
import compnav from './components/nav.vue'

export default {
  data () {
    return {
      loading: true,
      spot: []
    }
  },
  created () {
    const that = this;
    $.ajax({
      type: "GET",
      url: "assets/data/spot.json",
      dataType: "json",
      success: spot => {
        console.log("ajax success")
        that.spot = spot
        that.loading = false
      },
      error: () => {
        console.log("ajax error")
      }
    });
  },
  components: {
    compnav
  }
}
</script>
