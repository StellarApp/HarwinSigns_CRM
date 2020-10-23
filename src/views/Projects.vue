<template>
  <div class="container mt-4 ml-2">
    <EditProject
      v-show="isModalVisible"
      @close="closeModal"
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
          <tr v-for="(project, index) in projects" :key="index">
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


export default {
  name: "Projects",
  data: function() {
    return {
      isModalVisible: false,
      selectedProject: null,
      headerFields: [
        {
          name: 'projectId',
          label: 'ID',
          editable: false,
          width: '200px',
          sortable: true
        },
        {
          name: 'projectName',
          label: 'Project',
          editable: false,
          sortable: true
        },
        {
          name: 'clientFirstName',
          label: 'Client First Name',
          editable: true,
          sortable: true
        },
        {
          name: 'clientLastName',
          label: 'Client LastName',
          editable: true,
          sortable: true
        },
        {
          name: 'clientEmail',
          label: 'Client Email',
          editable: true,
          sortable: true
        },
        {
          name: 'clientPhone',
          label: 'Client Phone',
          editable: true,
          sortable: true
        },
        {
          name: 'clientCompany',
          label: 'Client Company',
          editable: true,
          sortable: true
        },
        {
          name: 'landloardFirstName',
          label: 'Landloard FirstName',
          editable: true,
          sortable: true
        },
         {
          name: 'landloardLastName',
          label: 'Landloard LastName',
          editable: true,
          sortable: true
        },
        {
          name: 'landloardEmail',
          label: 'Landloard Email',
          editable: true,
          sortable: true
        },
        {
          name: 'landloardPhone',
          label: 'Landloard Phone',
          editable: true,
          sortable: true
        },
        {
          name: 'locationAddress1',
          label: 'Address1',
          editable: true,
          sortable: true
        },
        {
          name: 'locationAddress2',
          label: 'Address2',
          editable: true,
          sortable: true
        },
        {
          name: 'locationCity',
          label: 'City',
          editable: true,
          sortable: true
        },
        {
          name: 'locationState',
          label: 'State',
          editable: true,
          sortable: true
        },
        {
          name: 'locationZipCode',
          label: 'Zip Code',
          editable: true,
          sortable: true
        },
        {
          name: 'projectBusiness',
          label: 'Store Business Name',
          editable: true,
          sortable: true
        },
        {
          name: 'projectCategory',
          label: 'Project Category',
          editable: true,
          sortable: true
        },
        {
          name: 'projectType',
          label: 'Project Type',
          editable: true,
          sortable: true
        },
        {
          name: 'projectDescription',
          label: 'Project Description',
          editable: true,
          sortable: true
        },
        {
          name: 'projectStatus',
          label: 'Status',
          editable: true,
          sortable: true
        },
        {
          name: 'projectPrice',
          label: 'Price',
          editable: true,
          sortable: true
        },
        {
          name: 'soldDate',
          label: 'Sold Date',
          editable: true,
          sortable: true
        },
        {
          name: 'quoteDate',
          label: 'Quote Date',
          editable: true,
          sortable: true
        },
        {
          name: 'comment',
          label: 'Comment',
          editable: true,
          sortable: true
        },
        {
          name: 'createdBy',
          label: 'Created By',
          editable: false,
          sortable: true
        },
        {
          name: 'createdAt',
          label: 'Created',
          editable: false,
          sortable: true
        },
      ],
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