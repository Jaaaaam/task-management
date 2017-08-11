<template lang="html">
  <div class="tasks">
    <div class="row">
      <div class="col s4">
        <div class="card gray-background">
          <div class="card-header">
            To Do
          </div>
          <div class="card-content">
            <div v-for="todo in todos" class="task-item">
              <div class="row">
                <div class="col s2">
                  <i v-bind:class="todo.class" class="material-icons">lens</i>
                </div>
                <div class="col s10">
                  <p>{{ todo.name }}</p>
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
            <div v-for="doingItem in doing" class="task-item">
              <div class="row">
                <div class="col s2">
                  <i v-bind:class="doingItem.class" class="material-icons">lens</i>
                </div>
                <div class="col s10">
                  <p>{{ doingItem.name }}</p>
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
      </div><div class="col s4">
        <div class="card gray-background">
          <div class="card-header">
            Done
          </div>
          <div class="card-content">
            <div v-for="doneItem in done" class="task-item">
              <div class="row">
                <div class="col s2">
                  <i v-bind:class="doneItem.class" class="material-icons">lens</i>
                </div>
                <div class="col s10">
                  <p>{{ doneItem.name }}</p>
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: {},
      todos: {},
      doing: {},
      done: {}
    }
  },
  created () {
    var _this = this;
    axios.get('/tasks').then((response) => {
      _this.tasks = response.data;
      _this.todos =_this.tasks.filter(function (tasks) {
        tasks.class = (tasks.priority+'-prio');
        return tasks.status == 'todo'
      });
      _this.doing =_this.tasks.filter(function (tasks) {
        tasks.class = (tasks.priority+'-prio');
        return tasks.status == 'doing'
      });
      _this.done =_this.tasks.filter(function (tasks) {
        tasks.class = (tasks.priority+'-prio');
        return tasks.status == 'done'
      });
    })
  },

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
