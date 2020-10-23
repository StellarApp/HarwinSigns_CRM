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
      @updateProject = "updateProject"
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
    updateProject: function(payload){
      
      const id = payload.docId;
      const filtered = Object.keys(payload)
      .filter(key => key !== 'docId')
      .reduce((newObj, key) => {
        newObj[key] = payload[key]
        return newObj
      }, {});

      projectCollection
      .doc(id)
      .update(filtered)
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
