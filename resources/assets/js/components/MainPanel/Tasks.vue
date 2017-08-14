<template lang="html">
  <div class="tasks">
    <div class="row">
      <div class="col s4">
        <div class="card gray-background">
          <div class="card-header">
            To Do
            <span class="pull-right"><i class="material-icons">add_circle_outline</i></span>
          </div>
          <div class="card-content">
            <div v-for="todo in todos" class="task-item">
              <div class="row">
                <div class="col s2">
                  <i v-bind:class="todo.class" class="material-icons">lens</i>
                </div>
                <div class="col s10">
                  <p>{{ todo.name }}</p>
                  <p class="date-added">Created last {{ todo.created_at }}</p>
                  <hr>
                  <i class="material-icons" v-popover:swap-todo>swap_horiz</i>
                    <popover name="swap-todo">
                      <div @click="transferFromTodo(todo.id, 'doing')" class="popover-item">Move to Doing</div>
                      <div @click="transferFromTodo(todo.id, 'done')" class="popover-item no-border">Move to Done</div>
                    </popover>
                  <ul class="doer">
                    <li v-for="user in todo.users"><img class="round-image-small" :src="user.image"></li>
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
                  <p class="date-added">Created last {{ doingItem.created_at }}</p>
                  <hr>
                  <i class="material-icons" v-popover:swap-doing>swap_horiz</i>
                    <popover name="swap-doing">
                      <div @click="transferFromDoing(doingItem.id, 'todo')" class="popover-item">Move to Todo</div>
                      <div @click="transferFromDoing(doingItem.id, 'done')" class="popover-item no-border">Move to Done</div>
                    </popover>
                  <ul class="doer">
                    <li v-for="user in doingItem.users"><img class="round-image-small" :src="user.image"></li>
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
            <div v-for="doneItem in done" class="task-item">
              <div class="row">
                <div class="col s2">
                  <i v-bind:class="doneItem.class" class="material-icons">lens</i>
                </div>
                <div class="col s10">
                  <p>{{ doneItem.name }}</p>
                  <p class="date-added">Created last {{ doneItem.created_at }}</p>
                  <hr>
                  <i class="material-icons" v-popover:swap-done>swap_horiz</i>
                    <popover name="swap-done">
                      <div @click="transferFromDone(doneItem.id, 'todo')" class="popover-item">Move to Todo</div>
                      <div @click="transferFromDone(doneItem.id, 'doing')" class="popover-item no-border">Move to Doing</div>
                    </popover>
                  <ul class="doer">
                    <li v-for="user in doneItem.users"><img class="round-image-small" :src="user.image"></li>
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
    console.log(this);
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
  methods: {
    transferFromTodo: function (id, status) {
      var _this = this;

      if (status == 'doing') {
        var newItem = this.removeFromArray(_this.todos , id);
        axios.put('/tasks/updateStatus', {id, status}).then(function(res) {
          console.log(res);
          _this.doing.push(newItem[0]);
        });
      } else if (status == 'done') {
        var newItem = this.removeFromArray(_this.todos , id);
        axios.put('/tasks/updateStatus', {id, status}).then(function(res) {
          console.log(res);
          _this.done.push(newItem[0]);
        });
      }
    },
    transferFromDoing: function (id, status) {
      var _this = this;

      if (status == 'todo') {
        var newItem = this.removeFromArray(_this.doing , id);
        axios.put('/tasks/updateStatus', {id, status}).then(function(res) {
          console.log(res);
          _this.todos.push(newItem[0]);
        });
      } else if (status == 'done') {
        var newItem = this.removeFromArray(_this.doing , id);
        axios.put('/tasks/updateStatus', {id, status}).then(function(res) {
          console.log(res);
          _this.done.push(newItem[0]);
        });
      }
    },
    transferFromDone: function (id, status) {
      var _this = this;

      if (status == 'todo') {
        var newItem = this.removeFromArray(_this.done , id);
        axios.put('/tasks/updateStatus', {id, status}).then(function(res) {
          console.log(res);
          _this.todos.push(newItem[0]);
        });
      } else if (status == 'doing') {
        var newItem = this.removeFromArray(_this.done , id);
        axios.put('/tasks/updateStatus', {id, status}).then(function(res) {
          console.log(res);
          _this.doing.push(newItem[0]);
        });
      }
    },
    removeFromArray: function(array, id) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].id == id) {
          return array.splice(i, 1);
        }
      }
    }
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
