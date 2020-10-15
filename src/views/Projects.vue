<template>
  <div class="container mt-4">
    <div class="justify-content-left">
      <div class="">
        <h1 class="font-weight-light text-center" v-if="user">
          Project Management
        </h1>
        <DataTable
          :header-fields="headerFields"
          :sort-field="sortField"
          :sort="sort"
          :data="projects || []"
          :is-loading="isLoading"
          :css="datatableCss"
          not-found-msg="Items not found"
          track-by="firstName"
        >
          <thead>
            <tr>
              <th class="header-item" scope="col">#</th>
              <th class="header-item" scope="col"></th>
              <th class="header-item" v-for="field in fields" :key="field.id">
                {{ field }}
              </th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in projects" :key="item.id">
            <tr>
              <th scope="row">{{ index + 1 }}</th>
              <td>
                <button
                  class="btn btn-sm btn-outline-secondary mr-2"
                  title="Edit Project"
                  @click="$emit('', item.id)"
                >
                  <font-awesome-icon icon="edit"></font-awesome-icon>
                </button>
                <button
                  class="btn btn-sm btn-outline-secondary mr-2"
                  title="Update Project"
                  @click="$emit('', item.id)"
                >
                  <font-awesome-icon icon="check-square"></font-awesome-icon>
                </button>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  title="Delete Project"
                  @click="$emit('', item.id)"
                >
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                </button>
              </td>
              <!-- <td>
								{{ item.clientFirstName }}
							</td>
							<td>
								{{ item.projectName }}
							</td> -->
              <td v-for="field in fields" :key="field.id">
                {{ item[field] }}
              </td>
            </tr>
          </tbody>
          <template v-slot:pagination>
            <pagination
              :page="currentPage"
              :total-items="totalItems"
              :items-per-page="itemsPerPage"
              :css="paginationCss"
            />
          </template>
          <div class="items-per-page" slot="ItemsPerPage">
            <label>Items per page</label>
            <items-per-page-dropdown
              :list-items-per-page="listItemsPerPage"
              :items-per-page="itemsPerPage"
              :css="itemsPerPageCss"
            />
          </div>

          <div slot="spinner">Loading</div>

          <!-- Custom element for hometown -->
          <div slot="HometownNew" slot-scope="props">
            <input
              type="text"
              :value="props.rowData.hometown"
              @keyup="changeHometown($event, props.rowData.id)"
              class="form-control"
            />
          </div>
        </DataTable>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { DataTable} from 'v-datatable-light'

export default {
  name: "Projects",
  data: function() {
    return {
      fields: [
        "projectId",
        "projectName",
        "clientFirstName",
        "clientLastName",
        "clientEmail",
        "clientPhone",
        "clientCompany",
        "landloardFirstName",
        "landloardLastName",
        "landloardEmail",
        "landloardPhone",
        "locationAddress1",
        "locationAddress2",
        "locationCity",
        "locationState",
        "locationZipCode",
        "locationCountry",
        "projectBusiness",
        "projectCategory",
        "projectType",
        "projectStatus",
        "projectPrice",
        "soldDate",
        "quoteDate",
        "comment",
        "createdBy",
        "createdAt",
      ],
      datatableCss: {
        table: "table table-bordered table-hover table-striped table-center",
        theadTh: "header-item",
        thWrapper: "th-wrapper",
        thWrapperCheckboxes: "th-wrapper checkboxes",
        arrowsWrapper: "arrows-wrapper",
        arrowUp: "arrow up",
        arrowDown: "arrow down",
        footer: "footer",
      },
      paginationCss: {
        paginationItem: "pagination-item",
        moveFirstPage: "move-first-page",
        movePreviousPage: "move-previous-page",
        moveNextPage: "move-next-page",
        moveLastPage: "move-last-page",
        pageBtn: "page-btn",
      },
      itemsPerPageCss: {
        select: "item-per-page-dropdown",
      },
      isLoading: false,
      sort: "asc",
      sortField: "firstName",
      listItemsPerPage: [5, 10, 20, 50, 100],
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.projects.length,
      hometown: null,
      createHeaderName: "created:header",
    };
  },
  components: {
    FontAwesomeIcon,
    DataTable,
  },
  methods: {},
  props: ["user", "projects"],
};
</script>
