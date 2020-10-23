<template>
  <div class="container mt-4 ml-2">
    <EditProject
      v-show="isModalVisible"
      @close="closeModal"
      @updateProject="updateProject"
      :project = "selectedProject"
     />
    <div class="justify-content-center">
      <div class="">
        <h1 class="font-weight-light text-center" v-if="user">
          Project Management
        </h1>
        
        <table
        class="table table-striped table-hover table-sm table-bordered"
        >
        <thead>
          <tr>
            <th></th>
            <th v-for="field in headerFields" 
            :class="field.cssClasses"
            :key="field.label">{{ field.label}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td>
              <button
                class="btn btn-sm btn-outline-secondary mr-2"
                title="Edit Project"
                @click="showModal(project)"
              >
                <font-awesome-icon icon="edit"></font-awesome-icon>
              </button>
              <button
                class="btn btn-sm btn-outline-secondary mr-2"
                title="Update Project"
                @click="$emit('', project.id)"
              >
                <font-awesome-icon icon="check-square"></font-awesome-icon>
              </button>
              <button
                class="btn btn-sm btn-outline-secondary"
                title="Delete Project"
                @click="$emit('deleteProject', project.id)"
              >
                <font-awesome-icon icon="trash"></font-awesome-icon>
              </button> 
            </td>
            <td v-for="field in headerFields"
              :key="field.id">
              {{ project[field.name] }}
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div> 
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import EditProject from "./EditProject";
import { headerFields } from "../components/HeaderFields";

export default {
  name: "Projects",
  data: function() {
    return {
      headerFields,
      isModalVisible: false,
      selectedProject: null,
     
      // scrollVertical: false,
			// scrollHorizontal: true,
			// syncHeaderScroll: true,
			// syncFooterScroll: true,
			// includeFooter: true,
			// deadAreaColor: "#DDDDDD",
			// maxRows: 100,
			// freezeFirstColumn: false,
      // datatableCss: {
      //   table: "table table-bordered table-hover table-striped table-center",
      //   theadTh: "header-item",
      //   thWrapper: "th-wrapper",
      //   thWrapperCheckboxes: "th-wrapper checkboxes",
      //   arrowsWrapper: "arrows-wrapper",
      //   arrowUp: "arrow up",
      //   arrowDown: "arrow down",
      //   footer: "footer",
      // },
      // paginationCss: {
      //   paginationItem: "pagination-item",
      //   moveFirstPage: "move-first-page",
      //   movePreviousPage: "move-previous-page",
      //   moveNextPage: "move-next-page",
      //   moveLastPage: "move-last-page",
      //   pageBtn: "page-btn",
      // },
      // itemsPerPageCss: {
      //   select: "item-per-page-dropdown",
      // },
      // isLoading: false,
      // sort: "asc",
      // sortField: "projectId",
      // listItemsPerPage: [5, 10, 20, 50, 100],
      // itemsPerPage: 10,
      // currentPage: 1,
      // totalItems: this.projects.length,
      // hometown: null,
      // createHeaderName: "created:header",
    };
  },
  components: {
    FontAwesomeIcon,
    EditProject
  },
  methods: {
    showModal(project){
      this.isModalVisible = true;
      this.selectedProject = project;
    },
    closeModal(){
      this.isModalVisible = false;
      this.selectedProject = null;
    },
    updateProject(newProject){
      this.$emit('updateProject',newProject)
    }
  },
  props: ["user", "projects"],
};
</script>
<style scoped>
table{
   overflow-y:scroll;
   width:100em;
   height:50em;
   display:block;
}
</style>