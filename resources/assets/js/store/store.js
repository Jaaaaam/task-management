import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    tasks: [],
    todos: [],
    doing: [],
    done: [],
    newItem: {}
}

const getters = {
    tasks: state => state.tasks,
    todo: state => state.todos,
    doing: state => state.doing,
    done: state => state.done
}

const mutations = {
    setTasks(state, tasks) {
        state.tasks = tasks;
        // console.log('tasks', tasks);
    },

    setTodo(state, todo) {
        state.todos = todo;
        // console.log('todo', todo);
    },

    setDoing(state, doing) {
        state.doing = doing;
        // console.log('doing', doing);
    },

    setDone(state, done) {
        state.done = done;
        // console.log('done', done);
    },

    transferTask (state, task) {
        task.push(state.newItem[0]);
    },

    removeTask(state, task) {
        for (var i = 0; i < task.removeFrom.length; i++) {
            if (task.removeFrom[i].id == task.id) {
                state.newItem = task.removeFrom.splice(i, 1);
            }
        }
    }
}

const actions = {
    loadTasks ({commit}) {
        axios.get('/getTasks').then((response) => {
            commit('setTasks', response.data);
            let todo = response.data.filter(function (task) {
                task.class = (task.priority + '-prio');
                return task.status == 'todo';
            });
            let doing = response.data.filter(function (task) {
                task.class = (task.priority + '-prio');
                return task.status == 'doing'
            });
            let done = response.data.filter(function (task) {
                task.class = (task.priority + '-prio');
                return task.status == 'done'
            });

            commit('setTodo', todo);
            commit('setDoing', doing);
            commit('setDone', done);

            // $(function() {
            //     console.log('dropdown');
            //     $('.dropdown-button').dropdown();
            //     $('.dropdown-button2').dropdown();
            //     console.log($('.dropdown-button2'));
            //     console.log($('.dropdown-button'));
            // });
        });
    },

    transferFromTodo ({commit, state}, task) {
        task.removeFrom = state.todos;
        commit('removeTask', task);

        if (task.status == 'doing') {
            task.transferTo = state.doing;
        } else if (task.status == 'done') {
            task.transferTo = state.done;
        }

        var id = task.id
        var status = task.status

        axios.put('/tasks/updateStatus', { id, status }).then((res) => {
            console.log(res);
            commit('transferTask', task.transferTo);
        });
    },

    transferFromDoing ({commit, state}, task) {
        task.removeFrom = state.doing;
        commit('removeTask', task);

        if (task.status == 'todo') {
            task.transferTo = state.todos;
        } else if (task.status == 'done') {
            task.transferTo = state.done;
        }

        var id = task.id
        var status = task.status

        axios.put('/tasks/updateStatus', { id, status }).then((res) => {
            console.log(res);
            commit('transferTask', task.transferTo);
        });
    },

    transferFromDone ({commit, state}, task) {
        task.removeFrom = state.done;
        commit('removeTask', task);

        if (task.status == 'todo') {
            task.transferTo = state.todos;
        } else if (task.status == 'doing') {
            task.transferTo = state.doing;
        }

        var id = task.id
        var status = task.status

        axios.put('/tasks/updateStatus', { id, status }).then((res) => {
            console.log(res);
            commit('transferTask', task.transferTo);
        });
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
