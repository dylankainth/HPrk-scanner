<template>
  <div class="body">
    <UtilsHeader />

    <div class="container-fluid">
      <div class="row">
        <UtilsSidebar />

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
         

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

