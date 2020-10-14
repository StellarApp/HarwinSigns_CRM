<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link
          class="navbar-brand"
          to="/"
        >Harwin Signs</router-link>
        <div class="navbar-nav ml-auto">
          <router-link
            class="nav-item nav-link"
            to="/login"
            v-if="!user"
          >Log In</router-link>
          <router-link
            class="nav-item nav-link"
            to="/register-project"
            v-if="user"
          >Register Project</router-link>
          <router-link
            class="nav-item nav-link"
            to="/projects"
            v-if="user && user.displayName == 'Stella Kim'"
          >Manage Project</router-link>
          <button
            class="nav-item nav-link btn btn-link"
            @click="$emit('logout')"
            v-if="user"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navigation",
  props: ["user"]
};
</script>