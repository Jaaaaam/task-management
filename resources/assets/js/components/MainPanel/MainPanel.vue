<template lang="html">
  <div id="main-panel">
    <nav>
      <div class="nav-wrapper">
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html"><i class="material-icons">search</i></a></li>
          <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
          <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
          <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  #main-panel {
  position: absolute;
  left: 350px;
  right: 0px;
  top: 0px;
  bottom: 0px; }
  nav {
    background-color: #E3E1E2;
    line-height: 50px;
    -webkit-box-shadow: none;
    box-shadow: none; }
    nav .brand-logo {
      margin-left: 370px; }
    nav a {
      color: #1BB28F !important; }
</style>
