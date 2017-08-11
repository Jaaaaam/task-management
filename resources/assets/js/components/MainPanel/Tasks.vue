<template lang="html">
  <div class="tasks">
    <div class="row">
      <div class="col s4">
        <div class="card gray-background">
          <div class="card-header">
            To Do
          </div>
          <div class="card-content">
            <div class="task-item">
              <div class="row">
                <div class="col s2">
                  <i class="material-icons low-prio">lens</i>
                </div>
                <div class="col s10">
                  <p>Fix the responsiveness of Chat-Bot</p>
                  <p class="date-added">Added 3 days ago</p>
                  <ul class="doer">
                    <li><img class="round-image-small" src="images/bday1.jpg"></li>
                    <li><img class="round-image-small" src="images/bday3.jpg"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="task-item">
              <div class="row">
                <div class="col s2">
                  <i class="material-icons mid-prio">lens</i>
                </div>
                <div class="col s10">
                  <p>Add filters in the Schedule Table</p>
                  <p class="date-added">Added 3 days ago</p>
                  <ul class="doer">
                    <li><img class="round-image-small" src="images/bday1.jpg"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="task-item">
              <div class="row">
                <div class="col s2">
                  <i class="material-icons low-prio">lens</i>
                </div>
                <div class="col s10">
                  <p>Make a documentation of the system</p>
                  <p class="date-added">Added 3 days ago</p>
                  <ul class="doer">
                    <li><img class="round-image-small" src="images/bday1.jpg"></li>
                    <li><img class="round-image-small" src="images/bday3.jpg"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col s4">
        <div class="card gray-background">
          <div class="card-header">
            Doing
          </div>
          <div class="card-content">
            <div class="task-item">
              <div class="row">
                <div class="col s2">
                  <i class="material-icons high-prio">lens</i>
                </div>
                <div class="col s10">
                  <p>Fix the appending of message in Timeline</p>
                  <p class="date-added">Added 3 days ago</p>
                  <ul class="doer">
                    <li><img class="round-image-small" src="images/bday1.jpg"></li>
                    <li><img class="round-image-small" src="images/bday5.jpg"></li>
                    <li><img class="round-image-small" src="images/bday4.jpg"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="task-item">
              <div class="row">
                <div class="col s2">
                  <i class="material-icons high-prio">lens</i>
                </div>
                <div class="col s10">
                  <p>Fix the unaccurate firing of message</p>
                  <p class="date-added">Added 3 days ago</p>
                  <ul class="doer">
                    <li><img class="round-image-small" src="images/bday1.jpg"></li>
                    <li><img class="round-image-small" src="images/bday6.jpg"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col s4">
        <div class="card gray-background">
          <div class="card-header">
            Done
          </div>
          <div class="card-content">
            <div class="task-item">
              <div class="row">
                <div class="col s2">
                  <i class="material-icons mid-prio">lens</i>
                </div>
                <div class="col s10">
                  <p>Add additional button on the main page</p>
                  <p class="date-added">Added 3 days ago</p>
                  <ul class="doer">
                    <li><img class="round-image-small" src="images/bday1.jpg"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="task-item">
              <div class="row">
                <div class="col s2">
                  <i class="material-icons high-prio">lens</i>
                </div>
                <div class="col s10">
                  <p>Fix send feature</p>
                  <p class="date-added">Added 3 days ago</p>
                  <ul class="doer">
                    <li><img class="round-image-small" src="images/bday1.jpg"></li>
                    <li><img class="round-image-small" src="images/bday4.jpg"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="task-item">
              <div class="row">
                <div class="col s2">
                  <i class="material-icons low-prio">lens</i>
                </div>
                <div class="col s10">
                  <p>Add borders to all users images</p>
                  <p class="date-added">Added 3 days ago</p>
                  <ul class="doer">
                    <li><img class="round-image-small" src="images/bday1.jpg"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: {}
    }
  },
  created () {
    var _this = this;
    axios.get('/tasks').then((response) => {
      _this.tasks = response.data;
      console.log(_this.tasks);
    })
  }
}
</script>

<style lang="scss" scoped>
  .tasks {
    padding-top: 20px;
    background-color: #eeeeee;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 64px;
    bottom: 0px;
    .task-item {
      background-color: #fff;
      padding: 10px;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      margin-bottom: 15px;
      .doer {
        margin-bottom: 0px;
        margin-top: 0px;
        float: right;
      }
    }
  }
  .card {
    .card-header {
      font-size: 18px;
      font-weight: 500;
    }
    .card-content {
      padding: 15px;
    }
  }
  .gray-background {
    background-color: #fafafa;
  }

  ul {
    li {
      display: inline;
    }
  }

  .row {
    margin-bottom: 0px;
  }
</style>
