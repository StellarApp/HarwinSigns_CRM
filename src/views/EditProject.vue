<template>
     <transition name="modal"
     class="modal-fade" id="project" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true" >
        <div class="modal-backdrop" role="document">
            <div class="modal-content mr-5 ml-5">
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
                   <textarea class="form-control"  type="number" v-if="project" v-model="project.projectDescription"  />
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
                      <input type="text" class="form-control" v-if="project" v-model="project.clientLastName"  required>
                    </div>
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="clientCompany"
                      >Company</label
                    >
                      <input type="text" v-if="project" v-model="project.clientCompany" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="clientEmail"
                      >Email</label
                    >
                      <input type="email" v-if="project" v-model="project.clientEmail" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="clientPhone"
                      >Phone</label
                    >
                      <input type="number" v-if="project" v-model="project.clientPhone" class="form-control" required>
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
                      <input type="text" v-if="project" v-model="project.landlordFirstName" class="form-control" required>
                    </div>
                    <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="landlordLastName"
                      >Last Name</label
                    >
                      <input type="text" v-if="project" v-model="project.landlordLastName" class="form-control" required>
                    </div>
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="landlordEmail"
                      >Email</label
                    >
                      <input type="email" v-if="project" v-model="project.landlordEmail" class="form-control" >
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="landlordPhone"
                      >Phone</label
                    >
                      <input type="number" v-if="project" v-model="project.landlordPhone" class="form-control" >
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
                      <input type="text" v-if="project" v-model="project.locationAddress1" class="form-control" required>
                    </div>
                     <div class="form-group">
                      <label
                      class="form-control-label"
                      for="locationAddress2"
                      >Street Address 2</label
                    >
                      <input type="text" v-if="project" v-model="project.locationAddress2" class="form-control" >
                    </div>
                     <div class="form-group">
                      <label
                      class="form-control-label"
                      for="locationCity"
                      >City</label
                    >
                      <input type="text" v-if="project" v-model="project.locationCity" class="form-control" >
                    </div>
                     <div class="form-group">
                    <label
                      class="form-control-label"
                      for="locationState"
                      >State</label
                    >
                    <select class="form-control" v-if="project" v-model="project.locationState">
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
                      <input type="text" v-if="project" v-model="project.locationZipCode" class="form-control" required>
                    </div>
                     <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="locationCountry"
                      >Country</label
                    >
                      <input type="text" v-if="project" v-model="project.locationCountry" class="form-control" required>
                    </div>
                    </div>
                  </div>
                  <!-- Job Information -->
                  <div class="col-md-3">
                    <h6 class="display-6">Job Details</h6>
                    <hr>
                     <div class="form-group">
                      <label
                      class="form-control-label"
                      for="projectBusiness"
                      >Job Site Business Name</label
                    >
                      <input type="text" v-if="project" v-model="project.projectBusiness" class="form-control" >
                    </div>
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="projectStatus"
                      >Status</label
                    >
                      <input type="text" v-if="project" v-model="project.projectStatus" class="form-control" required>
                    </div>
                    <div class="form-row">                    
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="quoteDate"
                      >Quote Date</label
                    >
                      <input type="date" v-if="project" v-model="project.quoteDate" class="form-control" required>
                    </div>
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="quotePrice"
                      >Quote Price</label
                    >
                      <input type="number" v-if="project" v-model="project.quotePrice" class="form-control" required>
                    </div>
                    </div>
                    <div class="form-row">                    
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="soldDate"
                      >Sold Date</label
                    >
                      <input type="date" v-if="project" v-model="project.soldDate" class="form-control" required>
                    </div>
                      <div class="col form-group">
                      <label
                      class="form-control-label"
                      for="soldPrice"
                      >Sold Price</label
                    >
                      <input type="number" v-if="project" v-model="project.soldPrice" class="form-control" required>
                    </div>
                    </div>
                   
                    <div class="form-group">
                      <label
                      class="form-control-label"
                      for="comment"
                      >Comment</label
                    >
                      <textarea  v-if="project" v-model="project.comment" class="form-control" />
                    </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
              <button type="button" class="btn btn-primary" @click="updateProduct()" >Save changes</button>
            </div>
          </div>
          </div>
      </transition>
</template>


<script>
export default {
  name: "editProject",
  data: function () {
    return {
      updatedProject: {},
      categoryOptions:[
        {
          value: "Sign"          
        },
        {
          value: "Print"
        }
      ],
      typeOptions:[
        {
          category:"Sign",
          value:"Acrylic Sign",
          code:"AS"
          },
        {
          category:"Print",
          value:"Vinyl",
          code: "VL"},
        {
          category:"Print",
          value:"Window Decals",
          code: "WD"}
      ],
      statusOptions: [
        {
          value: "Quote"
        },
        {
          value: "Sold"
        }
      ],
      errors: [],
      stateOptions: [
        {
          name: "Alabama",
          abbreviation: "AL",
        },
        {
          name: "Alaska",
          abbreviation: "AK",
        },
        {
          name: "American Samoa",
          abbreviation: "AS",
        },
        {
          name: "Arizona",
          abbreviation: "AZ",
        },
        {
          name: "Arkansas",
          abbreviation: "AR",
        },
        {
          name: "California",
          abbreviation: "CA",
        },
        {
          name: "Colorado",
          abbreviation: "CO",
        },
        {
          name: "Connecticut",
          abbreviation: "CT",
        },
        {
          name: "Delaware",
          abbreviation: "DE",
        },
        {
          name: "District Of Columbia",
          abbreviation: "DC",
        },
        {
          name: "Federated States Of Micronesia",
          abbreviation: "FM",
        },
        {
          name: "Florida",
          abbreviation: "FL",
        },
        {
          name: "Georgia",
          abbreviation: "GA",
        },
        {
          name: "Guam",
          abbreviation: "GU",
        },
        {
          name: "Hawaii",
          abbreviation: "HI",
        },
        {
          name: "Idaho",
          abbreviation: "ID",
        },
        {
          name: "Illinois",
          abbreviation: "IL",
        },
        {
          name: "Indiana",
          abbreviation: "IN",
        },
        {
          name: "Iowa",
          abbreviation: "IA",
        },
        {
          name: "Kansas",
          abbreviation: "KS",
        },
        {
          name: "Kentucky",
          abbreviation: "KY",
        },
        {
          name: "Louisiana",
          abbreviation: "LA",
        },
        {
          name: "Maine",
          abbreviation: "ME",
        },
        {
          name: "Marshall Islands",
          abbreviation: "MH",
        },
        {
          name: "Maryland",
          abbreviation: "MD",
        },
        {
          name: "Massachusetts",
          abbreviation: "MA",
        },
        {
          name: "Michigan",
          abbreviation: "MI",
        },
        {
          name: "Minnesota",
          abbreviation: "MN",
        },
        {
          name: "Mississippi",
          abbreviation: "MS",
        },
        {
          name: "Missouri",
          abbreviation: "MO",
        },
        {
          name: "Montana",
          abbreviation: "MT",
        },
        {
          name: "Nebraska",
          abbreviation: "NE",
        },
        {
          name: "Nevada",
          abbreviation: "NV",
        },
        {
          name: "New Hampshire",
          abbreviation: "NH",
        },
        {
          name: "New Jersey",
          abbreviation: "NJ",
        },
        {
          name: "New Mexico",
          abbreviation: "NM",
        },
        {
          name: "New York",
          abbreviation: "NY",
        },
        {
          name: "North Carolina",
          abbreviation: "NC",
        },
        {
          name: "North Dakota",
          abbreviation: "ND",
        },
        {
          name: "Northern Mariana Islands",
          abbreviation: "MP",
        },
        {
          name: "Ohio",
          abbreviation: "OH",
        },
        {
          name: "Oklahoma",
          abbreviation: "OK",
        },
        {
          name: "Oregon",
          abbreviation: "OR",
        },
        {
          name: "Palau",
          abbreviation: "PW",
        },
        {
          name: "Pennsylvania",
          abbreviation: "PA",
        },
        {
          name: "Puerto Rico",
          abbreviation: "PR",
        },
        {
          name: "Rhode Island",
          abbreviation: "RI",
        },
        {
          name: "South Carolina",
          abbreviation: "SC",
        },
        {
          name: "South Dakota",
          abbreviation: "SD",
        },
        {
          name: "Tennessee",
          abbreviation: "TN",
        },
        {
          name: "Texas",
          abbreviation: "TX",
        },
        {
          name: "Utah",
          abbreviation: "UT",
        },
        {
          name: "Vermont",
          abbreviation: "VT",
        },
        {
          name: "Virgin Islands",
          abbreviation: "VI",
        },
        {
          name: "Virginia",
          abbreviation: "VA",
        },
        {
          name: "Washington",
          abbreviation: "WA",
        },
        {
          name: "West Virginia",
          abbreviation: "WV",
        },
        {
          name: "Wisconsin",
          abbreviation: "WI",
        },
        {
          name: "Wyoming",
          abbreviation: "WY",
        },
      ],
    };
  },
  methods: {
    itemChange: function(e){
      // Vue.set(e.dataItem, e.field, e.value)
      
      console.log("change", e.target.value)
      console.log("change", e.target.name)
    },
    handleUpdate: function () {
      const info = {
        clientFirstName: this.clientFirstName,
        clientLastName: this.clientLastName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        clientCompany: this.clientCompany,
        landlordFirstName: this.landlordFirstName,
        landlordLastName: this.landlordLastName,
        landlordEmail: this.landlordEmail,
        landlordPhone: (this.landlordPhone == '__________')? null: this.landlordPhone,
        locationAddress1: this.locationAddress1,
        locationAddress2: this.locationAddress2,
        locationCity: this.locationCity,
        locationState: this.locationState,
        locationZipCode: this.locationZipCode,
        locationCountry: this.locationCountry,
        projectCategory: this.projectCategory,
        projectType: this.projectType,
        projectStatus: this.projectStatus,
        projectBusiness: this.projectBusiness,
        projectPrice: this.projectPrice,
        soldDate: this.soldDate,
        quoteDate: this.quoteDate,
        comment: this.comment
      };

      this.$emit("updateProject", info);


      this.clientFirstName = null;
      this.clientLastName = null;
      this.clientEmail = null;
      this.clientPhone = null;
      this.landlordFirstName = null;
      this.landlordLastName = null;
      this.landlordEmail = null;
      this.landlordPhone = null;
      this.locationAddress1 = null;
      this.locationAddress2 = null;
      this.locationCity = null;
      this.locationState = "TX";
      this.locationZipCode = null;
      this.projectCategory = "";
      this.projectStatus = "";
      this.soldDate = null;
      this.quoteDate = null;
      this.clientCompany = null;
      this.projectBusiness = null;
      this.projectPrice = null;
      this.projectType = "";
      this.comment = null;
    },

    checkForm: function () {
      this.errors = [];
      if(!this.validEmail(this.clientEmail)){
        this.errors.push('Valid client email required.');
      }

      if(!this.validPhone(this.clientPhone)){
        this.errors.push('Valid client phone number required')
      }

      if (!this.landlordEmail && !this.landlordPhone) {
        this.errors.push("Please enter either landlord's phone or email.");
      } else if(!!this.landlordEmail && !this.validEmail(this.landlordEmail)){
        this.errors.push('landlord email is invalid')
      } else if(!!this.landlordPhone.length == 0 && !this.validPhone(this.landlordPhone)){
        this.errors.push('landlord phone is invalid')
      }


      if(this.projectStatus == ""){
        this.errors.push("Please select project status")
      }

      if(this.projectCategory == ""){
        this.errors.push("Please select project project category")
      }

      if(!this.validZipCode(this.locationZipCode)){
        this.errors.push('Valid zip code required')
      }

      if (this.errors.length == 0) {
        this.handleAdd();
        this.successAlert();
      } else {
        this.errorAlert();
      }
    },
    validEmail: function(email){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validZipCode: function(zipCode){
      const re = /[0-9]{5}/
      return re.test(zipCode);
    },
    validPhone: function(phone){
      const re = /[0-9]{10}/
      return re.test(phone);
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