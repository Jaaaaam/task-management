<template lang="html">
  <div id="side-panel">
    <div class="card">
      <div class="side-nav-header">
        <p class="side-nav-header-title"><i class="material-icons">person_pin_circle</i>BuddyPress</p>
      </div>
        <div class="card-content">
          <div class="profile">
            <div class="profile-image">
              <center><img class="round-image" src="http://via.placeholder.com/100x100"></center>
            </div>
            <div class="profile-name">
              <center>Jamille Silvestre</center>
            </div>
            <div class="profile-description">
              <center>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</center>
            </div>
          </div>
          <div class="collection">
            <a href="#" class="collection-item"><i class="material-icons">apps</i>Activities <span class="new badge">18</span></a>
            <a href="#" class="collection-item"><i class="material-icons">photo</i>Uploads</a>
            <a href="#" class="collection-item"><i class="material-icons">group</i>Groups</a>
            <a href="#" class="collection-item"><i class="material-icons">favorite_border</i>Post you Liked</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#side-panel {
  position: fixed;
  width: 350px;
  top: 0px;
  bottom: 0px;
  color: #424242; }
  #side-panel .profile-image {
    position: relative; }
  #side-panel .card {
    box-shadow: none;
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: 0px; }
    #side-panel .card .side-nav-header {
      height: 64px;
      background-color: #23D1A3; }
      #side-panel .card .side-nav-header .side-nav-header-title {
        margin: 0px;
        padding: 10px;
        font-size: 25px;
        color: #fff !important; }
        #side-panel .card .side-nav-header .side-nav-header-title i {
          margin-right: 10px; }
    #side-panel .card .card-image img {
      height: 180px; }
    #side-panel .card .card-content {
      padding: 15px; }
      #side-panel .card .card-content .profile {
        padding: 10px;
        border-radius: 8px;
        background-color: #E9FDCB; }
        #side-panel .card .card-content .profile .profile-name {
          font-size: 18px;
          color: #519482 !important;
          font-weight: bold;
          position: relative; }
        #side-panel .card .card-content .profile .profile-description {
          margin-top: 10px;
          color: #b0bec5;
          font-weight: bold; }
      #side-panel .card .card-content .collection {
        border: none;
        position: relative; }
        #side-panel .card .card-content .collection i {
          padding-right: 10px; }
        #side-panel .card .card-content .collection a.collection-item {
          color: #616161; }
</style>
