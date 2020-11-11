<template>
  <div class="main">
    <h2 id="absolute" value="getValue">{{ msg }}</h2>
    <select class="select-wrapper" v-model="changeSelected" material-select>
      <option v-for="(op,index) in getWorks" v-bind:value="index">{{op.workname}}</option>
    </select>
    <button class="waves-effect waves-light btn" v-on:click="">Передать</button>
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


