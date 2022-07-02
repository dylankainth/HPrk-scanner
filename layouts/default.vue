<template>
  <div class="body">
    <UtilsHeader />

    <div class="container-fluid">
      <div class="row">
        <UtilsSidebar />

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
         <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">{{ name }}</h1>

          </div>

          <Nuxt />
        
        </main>
      </div>
    </div>
  </div>
</template>

<style>
* {
  font-family: 'Roboto', sans-serif;
}
.body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
}
</style>

<script>
export default {
  data() {
    return {
      name : ''
    }
  },
  methods : {
    registerRouteName(){
      
      var routename = this.$route.name;
      var routes = this.$store.state.routes;

      for (const directory in routes){
        for (const route in routes[directory]) {

          if (this.$nuxt.$route.path == route){
           this.name = (routes[directory][route].name);
          }
        }
      }
    }
  },
  mounted(){
    this.registerRouteName();
  },
  watch: {
      $route() {
        this.registerRouteName();
      },
    },

}
</script>

