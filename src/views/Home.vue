<template>
  <div class="mt-3">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="text-secondary text-center">
      <div v-if="user" class="text-center">
        Welcome back
      <span class="font-weight-bold text-info">{{user.displayName}}</span>
      <a href="#" role="button" class="text-primary" @click="$emit('logout')">Logout</a>
      </div>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mb-2">Project Management</h4>
          <p class="lead">
          Sample sentences
            <a
              href="https://vuejs.org/"
            >Vue.js</a>
            with
            <a href="https://firebase.google.com">Firebase</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  props: ["user"]
}
</script>