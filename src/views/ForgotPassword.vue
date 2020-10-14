<template>
  <div>
    <form class="mt-3" @submit.prevent="forgotPassword">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Reset Password</h3>
                <section class="form-group">
                  <div class="col-12 alert alert-danger px-3" v-if="error">
                    {{ error }}
                  </div>
                  <label class="form-control-label sr-only" for="Email"
                    >Email</label
                  >
                  <input
                    required
                    class="form-control"
                    type="email"
                    id="email"
                    placeholder="Email"
                    v-model="email"
                  />
                </section>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit">
                    Email me a recovery link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      <router-link to="/login">
        <font-awesome-icon icon="arrow-circle-left"></font-awesome-icon> Back to
        login page</router-link
      >
    </p>
  </div>
</template>

<script>
import Firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  data: function() {
    return {
      email: null,
      error: null,
    };
  },
  methods: {
    forgotPassword: function() {
      const auth = Firebase.auth();

      auth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          alert("Check your registered email to reset the password.");
          this.email = null;
        })
        .catch(function(error) {
          // An error happened.
          // Need to revise
          alert(error)
          // this.error = error.message;
        });
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
