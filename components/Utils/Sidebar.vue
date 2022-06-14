<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="position-sticky top-0 start-0 pt-3">
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase"
      >
        <span>Discover</span>
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <nuxt-link class="nav-link" aria-current="page" to="/">
            <i data-feather="home"></i>
            Dashboard
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="list">
            <i data-feather="list"></i>
            List
          </nuxt-link>
        </li>
      </ul>
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase"
      >
        <span>Edit</span>
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="add">
            <i data-feather="file-plus"></i>
            Add Asset
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="remove">
            <i data-feather="file-minus"></i>
            Remove Asset
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="position-absolute bottom-0 start-0 p-3 text-secondary">
      <p>
        Haynes Park IT Department <br />
        &copy; 2022
      </p>
    </div>
    <div
      class="position-absolute bottom-0 start-0 p-3 py-1 pb-3 text-secondary"
    >
      <a
        class="link-secondary"
        href="https://github.com/dylankainth/HPrk-scanner"
        >View Code</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    feather.replace();
  },
};
</script>

<style>
/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nuxt-link-exact-active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
}
</style>
