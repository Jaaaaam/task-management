<template lang="html">
  <div class="timeline">
    <welcome></welcome>
    <div class="row">
      <div class="col s4">
        <upcoming-events></upcoming-events>
      </div>
      <div class="col s4">
        <!-- <recent-tasks></recent-tasks>
        <featured-employee></featured-employee> -->
      </div>
      <div class="col s4">
        <!-- <birthdays></birthdays> -->
      </div>
    </div>
  </div>
</template>

// <script>
// import Welcome from './Widgets/Welcome'
// import UpcomingEvents from './Widgets/UpcomingEvents'
// import RecentTasks from './Widgets/RecentTasks'
// import FeaturedEmployee from './Widgets/FeaturedEmployee'
// import Birthdays from './Widgets/Birthdays'
//
// export default {
//   components: {
//     'welcome': Welcome,
//     'upcomingEvents': UpcomingEvents,
//     'recentTasks': RecentTasks,
//     'featuredEmployee': FeaturedEmployee,
//     'birthdays': Birthdays
//   }
// }
// </script>

<style lang="css">
#main-panel .timeline {
  background-color: #eeeeee;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px; }
  #main-panel img {
    margin-top: 10px;
    max-height: 100%;
    max-width: 100%; }
  #main-panel .card .card-content .widget-item-list {
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 10px; }
    #main-panel .card .card-content .widget-item-list .event-date {
      margin-bottom: 10px;
      color: #9e9e9e;
      text-transform: uppercase;
      font-weight: bold; }
    #main-panel .card .card-content .widget-item-list .event-name .material-icons {
      color: #1EB18F; }
    #main-panel .card .card-content .widget-item-list .date-added {
      font-size: 13px;
      color: #9e9e9e !important;
      font-weight: bold;
      margin-top: 5px; }
    #main-panel .card .card-content .widget-item-list .round-image-medium img {
      margin-top: 0px; }
    #main-panel .card .card-content .widget-item-list .birthday {
      color: #9e9e9e !important;
      font-weight: bold;
      margin-top: 5px; }
  .card {
    margin-top: 0px;
  }
</style>
