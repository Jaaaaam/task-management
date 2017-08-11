<template lang="html">
  <div class="card">
    <div class="card-header">My Recent Tasks</div>
    <div class="card-content">
      <div class="widget-item-list">
        <div class="row">
          <div class="col s2">
            <i class="material-icons mid-prio">lens</i>
          </div>
          <div class="col s10">
            <p>Add filters in the Schedule Table</p>
            <p class="date-added">Added 3 days ago</p>
          </div>
        </div>
      </div>
      <div class="widget-item-list">
        <div class="row">
          <div class="col s2">
            <i class="material-icons low-prio">lens</i>
          </div>
          <div class="col s10">
            <p>Fix the responsiveness of Chat-Bot</p>
            <p class="date-added">Added 3 days ago</p>
          </div>
        </div>
      </div>
      <div class="widget-item-list">
        <div class="row">
          <div class="col s2">
            <i class="material-icons high-prio">lens</i>
          </div>
          <div class="col s10">
            <p>Fix the appending of message in Timeline</p>
            <p class="date-added">Added 3 days ago</p>
          </div>
        </div>
      </div>
      <center>
        <router-link to="/tasks" tag="a" class="waves-effect waves-light btn custom-button">See all tasks</router-link>
      </center>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.custom-button {
  box-shadow: none;
  background-color: #E9FDCB;
  color: #1EB18F;
  border: 2px solid #23D1A3;
  text-transform: none;
  font-weight: bold;
}
</style>
