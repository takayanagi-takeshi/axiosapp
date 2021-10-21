<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <ul>
      <li v-for="data in datas" :key="data.id">
      {{data.name_ja}}
      </li>
      <li v-for="data in datas" :key="data.id">
      :累積感染者数: {{data.cases}}
      </li>
      <li v-for="data in datas" :key="data.id">
      累積死者数: {{data.deaths}}
      </li>
    </ul> -->
    <ul>
      <li v-for="data in datas" :key="data.id" class="flex w-auto border">
      <div class="w-1/5 text-right">{{data.name_ja}}:</div>
      <div class="w-1/3 ml-10 text-left">累積感染者数: {{data.cases}}</div>
      <div class="w-1/3 ml-6 text-left">累積死者数: {{data.deaths}}</div>
      
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    datas() {
      return this.$store.state.datas
    }
  },
  created() {
    this.$store.dispatch('fetchDatas')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
