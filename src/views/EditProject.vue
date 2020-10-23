<template>
     <transition name="modal"
     class="modal-fade" id="project" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true" >
        <div class="modal-backdrop" role="document">
            <form class="modal-content mr-5 ml-5" @submit.prevent="handleUpdate(project.id)">
                <div class="modal-header">
                    <h5 class="modal-title" id="editLabel">Edit Project </h5>
                    <button type="button" class="close"  @click="$emit('close')">
                    X
                    </button>
                </div>

              <div class="modal-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group row">
                      <label
                          class="col-sm-4 col-form-label col-form-label-sm"
                          for="projectId"
                          >Project Id</label
                        >
                      <div class="col-sm-8">
                      <input class="form-control-plaintext" v-if="project" v-model="project.projectId" readonly  />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                          class="col-sm-4 col-form-label col-form-label-sm"
                          for="projectName"
                          >Project Name</label
                        >
                        <div class="col-sm-8">
                      <input class="form-control-plaintext" v-if="project" v-model="project.projectName"  readonly/> 
                      </div>
                    </div>
                  </div>

                <div class="col-md-4">
                  <label
                      class="mb-1 col-form-label col-form-label-sm"
                      for="projectDescription"
                      >Project Description</label
                    >
                   <textarea class="form-control" name="projectDescription" type="number" v-if="project" v-model="project.projectDescription" @change="itemChange" />
                </div>
                </div>
                <hr/>

                <div class="row">
                  <!-- Client Information -->
                  <div class="col-md-2">
                    <h6 class="display-6">Client Details</h6>
                    <hr>
                    <div class="form-row">                    
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="clientFirstName"
                      >First Name</label
                    >
                      <input type="text" name="clientFirstName" class="form-control" v-if="project" v-model="project.clientFirstName" @change="itemChange" required>
                    </div>
                    <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="clientLastName"
                      >Last Name</label
                    >
                      <input type="text" name="clientLastName" class="form-control" v-if="project" v-model="project.clientLastName" @change="itemChange"  required>
                    </div>
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="clientCompany"
                      >Company</label
                    >
                      <input type="text" name="clientCompany" v-if="project" v-model="project.clientCompany" class="form-control" @change="itemChange" required>
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="clientEmail"
                      >Email</label
                    >
                      <input type="email" name="clientEmail" v-if="project" v-model="project.clientEmail" class="form-control" @change="itemChange" required >
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="clientPhone"
                      >Phone</label
                    >
                      <masked-input name="clientPhone" v-if="project" v-model="project.clientPhone" class="form-control" @change="itemChange" mask="\+\1 (111) 111-1111" required />
                    </div>

                  </div>

                  <!-- Landlord Information -->
                  <div class="col-md-2">
                    <h6 class="display-6">LandLord Details</h6>
                    <hr>
                    <div class="form-row">                    
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="landlordFirstName"
                      >First Name</label
                    >
                      <input type="text" name="landlordFirstName" v-if="project" v-model="project.landlordFirstName" class="form-control" @change="itemChange" required>
                    </div>
                    <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="landlordLastName"
                      >Last Name</label
                    >
                      <input type="text" name="landlordLastName" v-if="project" v-model="project.landlordLastName" class="form-control" @change="itemChange" required>
                    </div>
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="landlordEmail"
                      >Email</label
                    >
                      <input type="email" name="landlordEmail" v-if="project" v-model="project.landlordEmail" class="form-control" @change="itemChange" >
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="landlordPhone"
                      >Phone</label
                    >
                      <masked-input name="landlordPhone" v-if="project" v-model="project.landlordPhone" class="form-control" @change="itemChange" mask="\+\1 (111) 111-1111" />
                    </div>
                    <!-- <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input type="file" @change="uploadImage" class="form-control">
                    </div> -->
                  </div>

                  <!-- Location Information -->
                  <div class="col-md-2">
                    <h6 class="display-6">Location Details</h6>
                    <hr>
                     <div class="form-group">
                      <label
                      class="form-control-label"
                      for="locationAddress1"
                      >Street Address 1</label
                    >
                      <input type="text" name="locationAddress1" v-if="project" v-model="project.locationAddress1" class="form-control" @change="itemChange" required>
                    </div>
                     <div class="form-group">
                      <label
                      class="form-control-label"
                      for="locationAddress2"
                      >Street Address 2</label
                    >
                      <input type="text" name="locationAddress2" v-if="project" v-model="project.locationAddress2" class="form-control" @change="itemChange" >
                    </div>
                     <div class="form-group">
                      <label
                      class="form-control-label"
                      for="locationCity"
                      >City</label
                    >
                      <input type="text" name="locationCity" v-if="project" v-model="project.locationCity" class="form-control" @change="itemChange" >
                    </div>
                     <div class="form-group">
                    <label
                      class="form-control-label"
                      for="locationState"
                      >State</label
                    >
                    <select class="form-control" name="locationState" v-if="project" v-model="project.locationState" @change="itemChange">
                      <option
                        v-for="(option, index) in stateOptions"
                        v-bind:key="index"
                        v-bind:value="option.abbreviation"
                      >
                        {{ option.name }}
                      </option>
                    </select>
                    </div>
                    <div class="form-row">
                     <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="locationZipCode"
                      >Zip Code</label
                    >
                      <masked-input name="locationZipCode" v-if="project" v-model="project.locationZipCode" class="form-control" @change="itemChange" mask="11111" required/>
                    </div>
                     <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="locationCountry"
                      >Country</label
                    >
                      <input type="text" name="locationCountry" v-if="project" v-model="project.locationCountry" class="form-control" @change="itemChange" required>
                    </div>
                    </div>
                  </div>
                  <!-- Job Information -->
                  <div class="col-md-3">
                    <h6 class="display-6">Job Details</h6>
                    <hr>
                     <div class="form-row">                    
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="projectCategory"
                      >Category</label
                    >
                      <select name="projectCategory" v-if="project" v-model="project.projectCategory" class="form-control" @change="itemChange" required>
                        <option
                          v-for="(option, i) in categoryOptions"
                          v-bind:key="i"
                          v-bind:value="option.value"
                        >
                        {{option.value}}
                        </option>
                      </select>
                    </div>
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="projectType"
                      >Quote Price</label
                    >
                      <select name="projectType" v-if="project" v-model="project.projectType" class="form-control" @change="itemChange"  required>
                        <option
                          v-for="(option, i) in typeOptions"
                          v-bind:key="i"
                          v-bind:value="option.code"
                        >
                        {{option.value}}
                        </option>
                      </select>
                    </div>
                    </div>
                     <div class="form-group">
                      <label
                      class="form-control-label"
                      for="projectBusiness"
                      >Job Site Business Name</label
                    >
                      <input type="text" name="projectBusiness" v-if="project" v-model="project.projectBusiness" class="form-control" @change="itemChange" required>
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="projectStatus"
                      >Status</label
                    >
                      <select
                      class="form-control"
                      id="projectStatus"
                      name="projectStatus"
                      v-if="project"
                      v-model="project.projectStatus"
                      @change="itemChange"
                      >
                    <option
                      v-for="(option, i) in statusOptions"
                      v-bind:key="i"
                      v-bind:value="option.value"
                    >
                    {{option.value}}
                    </option>
                    </select>
                    </div>
                    <div class="form-row">                    
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="quoteDate"
                      >Quote Date</label
                    >
                      <input type="date" name="quoteDate" v-if="project" v-model="project.quoteDate" class="form-control" @change="itemChange" >
                    </div>
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="quotePrice"
                      >Quote Price</label
                    >
                      <input type="number" name="quotePrice" v-if="project" v-model="project.quotePrice" class="form-control" @change="itemChange"  >
                    </div>
                    </div>
                    <div class="form-row">                    
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="soldDate"
                      >Sold Date</label
                    >
                      <input type="date" name="soldDate" v-if="project" v-model="project.soldDate" class="form-control" @change="itemChange" >
                    </div>
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="soldPrice"
                      >Sold Price</label
                    >
                      <input type="number" name="soldPrice" v-if="project" v-model="project.soldPrice" class="form-control" @change="itemChange" >
                    </div>
                    </div>
                   
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="comment"
                      >Comment</label
                    >
                      <textarea name="comment" v-if="project" v-model="project.comment" class="form-control" @change="itemChange"  />
                    </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
              <button type="submit" class="btn btn-primary"  >Save changes</button>
            </div>
          </form>
          </div>
      </transition>
</template>


<script>
import MaskedInput from 'vue-masked-input';
import { stateOptions, categoryOptions, typeOptions, statusOptions} from '../components/Options';

export default {
  name: "editProject",
  data: function () {
    return {
      newProject: {},
      stateOptions,
      categoryOptions,
      typeOptions,
      statusOptions,
      errors: [],
    };
  },
  methods: {
    itemChange: function(e){

      const { value, name } = e.target
      this.newProject[name] = value
      
      console.log("new", this.newProject)
    },
    handleUpdate: function (id) {
      this.newProject.docId = id
      this.$emit('updateProject', this.newProject)
      this.newProject = {}

    },
    successAlert: function(){
      this.$alert(
      "The information is successfully saved",
      "Success",
      "success"
      )
    },
    errorAlert: function(){
      this.$alert(
        "",
        "Invalid Information",
        "error",{
          confirmButtonText: "Got it!"
        }
      )
    }
  },
  components: {
    MaskedInput                         
  },
  props: ["project"]
};
</script>

<style>

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>