<template lang="html">
  <div class="tasks">
    <div class="row">
      <div class="col s4">
        <div class="card gray-background">
          <div class="card-header">
            To Do
            <span @click="showAddTaskModal()" class="pull-right"><i class="material-icons">add_circle_outline</i></span>
          </div>
          <div class="card-content">
            <div v-for="todo in todos" class="task-item">
              <div class="row">
                <div class="col s2">
                  <i v-bind:class="todo.class" class="material-icons">lens</i>
                </div>
                <div class="col s10">
                  <p @click="showTaskModal(todo)">{{ todo.name }}</p>
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
                  <p @click="showTaskModal(doingItem)">{{ doingItem.name }}</p>
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
                  <p @click="showTaskModal(doneItem)">{{ doneItem.name }}</p>
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
    <modal name="task">
      Show Task
      {{ task }}
    </modal>
    <modal name="add-task" height="600">
      <div class="modal-container">
        <h4>Add Task</h4>
        <div class="input-field">
           <select>
             <option value="" selected>Choose your option</option>
             <option value="1">Option 1</option>
             <option value="2">Option 2</option>
             <option value="3">Option 3</option>
           </select>
           <label>Materialize Select</label>
        </div>
        <hr>
        <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text" class="validate">
            <label for="name">Task Name</label>
          </div>
          <div class="input-field col s12">
            <textarea id="description" type="text" class="materialize-textarea"></textarea>
            <label for="description">Task Description</label>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="status" type="text" class="validate">
              <label for="status">Status</label>
            </div>
            <div class="input-field col s6">
              <input id="priority" type="text" class="validate">
              <label for="priority">Priority</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <input type="date" id="start_date" class="">
            <!-- <label for="start_date">Start Date</label> -->
          </div>
          <div class="field col s6">
            <input type="date" id="end_date" class="">
            <!-- <label for="end_date">End Date</label> -->
          </div>
          <div class="input-field col s12">
            <input id="assigned_to" type="text" class="validate">
            <label for="assigned_to">AssignedTo</label>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: [],
      todos: [],
      doing: [],
      done: [],
      task: {}
    }
  },
  mounted() {

  },
  created () {
    $(document).ready(function() {
      $('.modal').modal();
      console.log($('select'));
      console.log('SHEEET', $('select').material_select);
      $('select').material_select();

    });
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
    },
    showTaskModal: function (task) {
      console.log(task);
      this.task = task;
      this.$modal.show('task');
    },
    showAddTaskModal: function (task) {
      this.$modal.show('add-task');
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

  .modal-container {
    padding: 20px;
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
