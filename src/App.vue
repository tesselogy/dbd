<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo" >ABSLT</a>
        <ul id="nav-mobile" class="right">
          <li><router-link to="/">Работы</router-link></li>
       </ul>
      </div>
    </nav>
    <div class="container"><router-view/></div>
  </div>
</template>

<script>


  export default {
    name: 'App'
  }


</script>

<style>
body {
margin-top: 0px;
}
</style>