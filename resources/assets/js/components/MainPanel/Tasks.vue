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
            <div v-for="(todo, key) in todos" class="task-item">
              <div class="row">
                <div class="col s2">
                  <i v-bind:class="todo.class" class="material-icons">lens</i>
                </div>
                <div class="col s10">
                  <p @click="showTaskModal(todo)">{{ todo.name }}</p>
                  <p class="date-added">Created last {{ todo.created_at }}</p>
                  <hr>


                  <!-- <a @click="test()" class='dropdown-button2' href="#" :data-activates="key"><i class="material-icons" >swap_horiz</i></a>

                  <ul :id="key" class='dropdown-content'>
                    <li @click="transferFromTodo({'id': todo.id, 'status': 'doing'})"><a >Move to Doing</a></li>
                    <li @click="transferFromTodo({'id': todo.id, 'status': 'done'})"><a >Move to Done</a></li>
                  </ul> -->

                  <i class="material-icons" v-popover:swap-todo>swap_horiz</i>
                    <popover name="swap-todo">
                      <div @click="transferFromTodo({'id': todo.id, 'status': 'doing'})" class="popover-item">Move to Doing</div>
                      <div @click="transferFromTodo({'id': todo.id, 'status': 'done'})" class="popover-item no-border">Move to Done</div>
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
            <div v-for="(doingItem, key) in doing" class="task-item">
              <div class="row">
                <div class="col s2">
                  <i v-bind:class="doingItem.class" class="material-icons">lens</i>
                </div>
                <div class="col s10">
                  <p @click="showTaskModal(doingItem)">{{ doingItem.name }}</p>
                  <p class="date-added">Created last {{ doingItem.created_at }}</p>
                  <hr>

                  <!-- <a class='dropdown-button2' href="#" :data-activates="key"><i class="material-icons" >swap_horiz</i></a>

                  <ul :id="key" class='dropdown-content'>
                    <li @click="transferFromTodo({'id': doingItem.id, 'status': 'doing'})"><a >Move to Doing</a></li>
                    <li @click="transferFromTodo({'id': doingItem.id, 'status': 'done'})"><a >Move to Done</a></li>
                  </ul> -->

                  <i class="material-icons" v-popover:swap-doing>swap_horiz</i>
                    <popover name="swap-doing">
                      <div @click="transferFromDoing({'id': doingItem.id, 'status': 'todo'})" class="popover-item">Move to Todo</div>
                      <div @click="transferFromDoing({'id': doingItem.id, 'status': 'done'})" class="popover-item no-border">Move to Done</div>
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
                      <div @click="transferFromDone({'id': doneItem.id, 'status': 'todo'})" class="popover-item">Move to Todo</div>
                      <div @click="transferFromDone({'id': doneItem.id, 'status': 'doing'})" class="popover-item no-border">Move to Doing</div>
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

    <modal :show="isTaskModalShown" @close="isTaskModalShown=false">
      <h4 slot="header">Add Task</h4>
      <div slot="body">
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
              <select>
                <option value="" selected>Choose your option</option>
                <option value="1">Todo</option>
                <option value="2">Doing</option>
                <option value="3">Done</option>
              </select>
              <label>Status</label>
            </div>
            <div class="input-field col s6">
              <select>
                <option value="" selected>Choose your option</option>
                <option value="1">Low</option>
                <option value="2">Mid</option>
                <option value="3">High</option>
              </select>
              <label>Priority</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <input type="text" class="datepicker">
          </div>
          <div class="field col s6">
            <input type="text" class="datepicker">
          </div>
          <div class="input-field col s12">
            <input id="assigned_to" type="text" class="validate">
            <label for="assigned_to">AssignedTo</label>
          </div>
        </div>
        <button type="submit" name="button" class="waves-effect waves-light btn custom-button">Submit</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      isTaskModalShown: false,
    }
  },
  mounted () {
      this.$store.dispatch('loadTasks');
      console.log(this.$store.getters.todo);

  },
  computed: mapGetters({
    tasks: 'tasks',
    todos: 'todo',
    doing: 'doing',
    done: 'done'
  }),
  methods: {
    test : function () {
      console.log('todos', this.todos);
      console.log('doing', this.doing);
    },
    transferFromTodo: function (task) {
      this.$store.dispatch('transferFromTodo', task);
    },
    transferFromDoing: function (task) {
      this.$store.dispatch('transferFromDoing', task);
    },
    transferFromDone: function (task) {
      this.$store.dispatch('transferFromDone', task);
    },
    showAddTaskModal: function () {
      $(document).ready(function() {
        $('select').material_select();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
          });
      });
      this.isTaskModalShown = true;
    },
    initDropdown: function () {
      $(document).ready(function() {
        console.log('dropdown');
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false, // Does not change width of dropdown to that of the activator
            hover: false, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left', // Displays dropdown with edge aligned to the left of button
            stopPropagation: false // Stops event propagation
          }
        );
      });
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
