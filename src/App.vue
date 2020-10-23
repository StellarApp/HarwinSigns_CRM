<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view
      class="container"
      :user="user"
      :projects="projects"
      @logout="logout"
      @addProject="addProject"
      @deleteProject = "deleteProject"
    />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Firebase from "firebase";
import { auth, projectCollection } from "./db";
import moment from "moment";

export default {
  name: "App",
  data: function() {
    return {
      user: null,
      projects: [],
    };
  },
  methods: {
    logout: function() {
      auth
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        });
    },
    addProject: function(payload) {
      const {
        clientFirstName,
        clientLastName,
        clientEmail,
        clientPhone,
        clientCompany,
        landlordFirstName,
        landlordLastName,
        landlordEmail,
        landlordPhone,
        locationAddress1,
        locationAddress2,
        locationCity,
        locationState,
        locationZipCode,
        locationCountry,
        projectBusiness,
        projectCategory,
        projectType,
        projectStatus,
        soldPrice,
        quotePrice,
        soldDate,
        quoteDate,
        comment,
      } = payload;

      const currentDateTime = Firebase.firestore.FieldValue.serverTimestamp();

      projectCollection.add({
        clientFirstName,
        clientLastName,
        clientEmail,
        clientPhone,
        clientCompany,
        landlordFirstName,
        landlordLastName,
        landlordEmail,
        landlordPhone,
        locationAddress1,
        locationAddress2,
        locationCity,
        locationState,
        locationZipCode,
        locationCountry,
        projectBusiness,
        projectCategory,
        projectType,
        projectStatus,
        soldPrice,
        quotePrice,
        soldDate,
        quoteDate,
        comment,
        projectDescription: '',
        projectName:
          projectCategory[0] + "-" + projectBusiness + "-" + locationAddress1,
        createdBy: this.user.displayName,
        createdAt: moment(currentDateTime).format("MM/DD/YYYY hh:mm"),
        projectId:
          projectCategory[0] +
          projectType +
          moment(currentDateTime).format("MMDDYY"),
      });
    },
    deleteProject: function(payload){
      projectCollection
      .doc(payload)
      .delete();
    },
    editProject: function(payload){
      projectCollection
      .doc(payload.id)
      .update({})
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      }
    });

    projectCollection.onSnapshot((snapShot) => {
      const snapData = [];

      snapShot.forEach((doc) => {
        snapData.push(
          { id: doc.id, ...doc.data() }
          // {
          // id: doc.id,
          // client: doc.data().clientFirstName + doc.data().clientLastName,
          // projectName: doc.data().projectName,
          // projectStatus: doc.data().projectStatus,
          // projectDescription: (!doc.data().projectDescription)? '':doc.data().projectDescription
          // projectLocation:doc.data().projectStatus,
          // }
        );
      });

      this.projects = snapData.sort((a, b) => {
        if (a.projectName.toLowerCase < b.projectName.toLowerCase) {
          return -1;
        } else {
          return 1;
        }
      });
    });
  },
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
