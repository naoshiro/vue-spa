<template>
  <h3>COMPONENT/NAV</h3>
  <nav class="navbar navbar-light bg-faded">
    <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
      &#9776;
    </button>
    <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
      <a class="navbar-brand" href="#">SITE NAME</a>
      <ul class="nav navbar-nav">
        <li class="nav-item" v-bind:class="{'active': $route.title == 'HOME'}">
          <a class="nav-link" v-link="{path: '/'}">HOME</a>
        </li>
        <li class="nav-item" v-bind:class="{'active': $route.title == 'ABOUT'}">
          <a class="nav-link" v-link="{path: '/about'}">ABOUT</a>
        </li>
        <li class="nav-item" v-bind:class="{'active': $route.title == 'AREA'}">
          <a class="nav-link" v-link="{path: '/area'}">AREA</a>
        </li>
        <li class="nav-item" v-bind:class="{'active': $route.title == 'CONTACT'}">
          <a class="nav-link" v-link="{path: '/contact'}">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>
  <nav class="nav nav-inline">
  </nav>
</template>
