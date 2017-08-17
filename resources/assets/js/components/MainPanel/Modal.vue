<template lang="html">
  <transition name="modal">
    <div class="modal-wrapper" v-if="show">
      <div class="modal-mask" @click="$emit('close')">
      </div>
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
            Title
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body">
            Sample Body Text
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">

          </slot>
        </div>
      </div>
    </div>

  </transition>
</template>

<script>
export default {
  props: ['show', 'data'],
  data () {
    return {
    }
  },
}
</script>

<style lang="css">
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
  }

  .modal-container {
    position: fixed;
    width: 50%;
    left: 25%;
    top: 20px;
    bottom: 20px;
    margin: 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    z-index: 9999;
    overflow-y: scroll;
  }

  .modal-header h3 {
  margin-top: 0;
  color: #42b983;
  }

  .modal-body {
  margin: 20px 0;
  }

  .modal-default-button {
  float: right;
  }

  /*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */

  .modal-enter {
  opacity: 0;
  }

  .modal-leave-active {
  opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  }
</style>
