<template>
  <div class="main">
    <h2 id="absolute" v-bind:value="getValue">{{ msg }}</h2>
    <select class="select-wrapper" v-model="changeSelected" material-select>
      <option v-for="(op,index) in getWorks" v-bind:value="index">{{op.workname}}</option>
    </select>
    <a href="javascript:void(0);"  id="sendbutton" class="waves-effect waves-light btn" v-on:click="return false">Передать</a>
  </div>
</template>

<script>

export default {
  name: "Main",
  props: {
    msg: String
  },
  computed: {
    getWorks() {
      return this.$store.getters.getWorks
    },
    getValue(){
      return this.$store.getters.getValue
    },
    changeSelected: {
      get () {
        return this.$store.getters.getSelected
      },
      set (value) {
        this.$store.commit('setSelected', value)
      }
    }
  }
};
</script>


