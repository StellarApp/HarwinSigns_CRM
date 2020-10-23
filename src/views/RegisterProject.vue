<template>
  <div>
    <form class="mt-3" @submit.prevent="checkForm">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
                <h3 class="font-weight-light">New Job Registration Form</h3>
            <div class="card bg-light">
              <div class="card-body">
                <p
                    v-if="errors.length"
                    class="col-12 alert alert-danger px-3"
                  >
                  <b>Please correct the following errors(s):</b>
                    <ul>
                      <li v-for = "(error,index) in errors" v-bind:key="index">{{error}}</li>
                    </ul>
                  </p>
                <h4 class="font-weight-light mb-3">Client Contact Information</h4>
                <div class="form-row">
                  <section class="col-sm-6 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="clientFirstName"
                      >clientFirstName</label
                    >
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text ">
                          <font-awesome-icon icon="user"></font-awesome-icon>
                        </div>
                      </div>
                    <input
                      class="form-control"
                      type="text"
                      id="clientFirstName"
                      placeholder="First Name"
                      name="clientFirstName"
                      required
                      v-model="clientFirstName"
                    />
                    </div>
                  </section>
                  <section class="col-sm-6 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="clientLastName"
                      >clientLastName</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      id="clientLastName"
                      placeholder="Last Name"
                      name="clientLastName"
                      required
                      v-model="clientLastName"
                    />
                  </section>
                </div>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="clientCompany"
                    >Company</label
                  >
                  <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <font-awesome-icon icon="building"></font-awesome-icon>
                      </div>
                  </div>
                  <input
                    class="form-control"
                    type="clientCompany"
                    id="clientCompany"
                    placeholder="Company Name"
                    required
                    name="clientCompany"
                    v-model="clientCompany"
                  />
                  </div>
                </section>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="clientEmail"
                    >Email</label
                  >
                  <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <font-awesome-icon icon="envelope"></font-awesome-icon>
                      </div>
                  </div>
                  <input
                    class="form-control"
                    type="clientEmail"
                    id="clientEmail"
                    placeholder="Email Address"
                    required
                    name="clientEmail"
                    v-model="clientEmail"
                  />
                  </div>
                </section>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="clientPhone"
                    >Phone</label
                  >
                  <div class="input-group">
                     <div class="input-group-prepend">
                        <div class="input-group-text">
                          <font-awesome-icon icon="phone"></font-awesome-icon>
                        </div>
                      </div>
                  <masked-input
                    class="form-control"
                    type="clientPhone"
                    id="clientPhone"
                    placeholder="Phone Number"
                    required
                    name="clientPhone"
                    mask="\+\1 (111) 111-1111"
                    @input="clientPhone = arguments[1]"
                  />
                  </div>
                </section>
                <h4 class="font-weight-light mb-3">Landlord Contact Information</h4>
                <div class="form-row">
                  <section class="col-sm-6 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="landlordFirstName"
                      >landlordFirstName</label
                    >
                    <div class="input-group">
                       <div class="input-group-prepend">
                        <div class="input-group-text">
                          <font-awesome-icon icon="user"></font-awesome-icon>
                        </div>
                      </div>
                    <input
                      class="form-control"
                      type="text"
                      id="landlordFirstName"
                      placeholder="First Name"
                      name="landlordFirstName"
                      required
                      v-model="landlordFirstName"
                    /></div>
                  </section>
                  <section class="col-sm-6 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="landlordLastName"
                      >landlordLastName</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      id="landlordLastName"
                      placeholder="Last Name"
                      name="landlordLastName"
                      required
                      v-model="landlordLastName"
                    />
                  </section>
                </div>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="landlordEmail"
                    >Email</label
                  >
                  <div class="input-group">
                   <div class="input-group-prepend">
                    <div class="input-group-text">
                      <font-awesome-icon icon="envelope"></font-awesome-icon>
                      </div>
                  </div>
                  <input
                    class="form-control"
                    type="email"
                    id="landlordEmail"
                    placeholder="Email Address"
                    name="landlordEmail"
                    v-model="landlordEmail"
                  />
                  </div>
                </section>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="landlordPhone"
                    >Phone</label
                  >
                  <div class="input-group">
                     <div class="input-group-prepend">
                        <div class="input-group-text">
                          <font-awesome-icon icon="phone"></font-awesome-icon>
                        </div>
                      </div>
                  <masked-input
                    class="form-control"
                    type="tel"
                    id="landlordPhone"
                    placeholder="Contact Phone Number"
                    name="landlordPhone"
                    mask="\+\1 (111) 111-1111"
                    @input="landlordPhone = arguments[1]"
                  /></div>
                </section>
                <h4 class="font-weight-light mb-3">Project Detail</h4>
                <div class="form-row">
                  <section class="col-sm-6 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="category"
                    >Project Category</label>
                    <select
                    class="form-control"
                    id="projectCategory"
                    name="projectCategory"
                    v-model="projectCategory"
                    >
                    <option disabled value="">Select Project Category</option>
                    <option
                      v-for="(option, i) in categoryOptions"
                      v-bind:key="i"
                      v-bind:value="option.value"
                    >
                    {{option.value}}
                    </option>
                  </select>
                  </section>
                  <section class="col-sm-6 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="type"
                    >Project Type</label>
                    <select
                    class="form-control"
                    id="projectType"
                    name="projectType"
                    v-model="projectType"
                    >
                    <option disabled value="">Select Project Type</option>
                    <option
                      v-for="(option, i) in typeOptions"
                      v-bind:key="i"
                      v-bind:value="option.code"
                    >
                    {{option.value}}
                    </option>
                  </select>
                  </section>
                </div>
                <div class="form-row">
                 <section class="col-sm-6 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="Status"
                    >Project Status</label>
                    <select
                    class="form-control"
                    id="projectStatus"
                    name="projectStatus"
                    v-model="projectStatus"
                    >
                    <option disabled value="">Select Project Status</option>
                    <option
                      v-for="(option, i) in statusOptions"
                      v-bind:key="i"
                      v-bind:value="option.value"
                    >
                    {{option.value}}
                    </option>
                    </select>
                  </section>
                  <section class="col-sm-2 form-group" v-if="projectStatus == 'Sold'">
                    <label class="my-1 ml-1" for="soldDate"
                    >Sold Date:</label
                  ></section>
                  <section class="col-sm-4 form-group" v-if="projectStatus == 'Sold'">
                  <input
                    class="form-control"
                    type="date"
                    id="soldDate"
                    name="soldDate"
                    v-model="soldDate"
                    :format="'mm dd yyyy'"
                  />
                </section>
                <section class="col-sm-2 form-group" v-if="projectStatus == 'Quote'">
                    <label class="my-1 ml-1" for="quoteDate"
                    >Quote Date:</label
                  ></section>
                <section class="col-sm-4 form-group" v-if="projectStatus == 'Quote'">
                  <input
                    class="form-control"
                    type="date"
                    id="quoteDate"
                    name="quoteDate"
                    v-model="quoteDate"
                  />
                </section>
                </div>
                <div class="form-row">
                <section class="col-sm-6 form-group">
                  <label class="form-control-label sr-only" for="projectBusiness"
                    >Project Location Business Name</label
                  >
                  <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <font-awesome-icon icon="building"></font-awesome-icon>
                      </div>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    id="projectBusiness"
                    placeholder="Location Business Name"
                    required
                    name="projectBusiness"
                    v-model="projectBusiness"
                  />
                  </div>
                </section>
                <section class="col-sm-6 form-group" v-if="projectStatus == 'Quote'">
                  <label class="form-control-label sr-only" for="quotePrice"
                    >Project Quote Price</label
                  >
                  <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
                      </div>
                  </div>
                  <input
                    class="form-control"
                    type="number"
                    id="quotePrice"
                    placeholder="Project Quote Price "
                    name="quotePrice"
                    v-model="quotePrice"
                  />
                  </div>
                </section>
                <section class="col-sm-6 form-group" v-if="projectStatus == 'Sold'">
                  <label class="form-control-label sr-only" for="soldPrice"
                    >Project Sold Price</label
                  >
                  <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
                      </div>
                  </div>
                  <input
                    class="form-control"
                    type="number"
                    id="soldPrice"
                    placeholder="Project Sold Price "
                    name="soldPrice"
                    v-model="soldPrice"
                  />
                  </div>
                </section>
                </div>
                <div class="form-row">
                  <section class="col-sm-6 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="locationAddress1"
                      >Address1</label
                    >
                    <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <font-awesome-icon icon="map-marker-alt"></font-awesome-icon>
                      </div>
                  </div>
                    <input
                      class="form-control"
                      type="text"
                      id="locationAddress1"
                      placeholder="Address1"
                      name="locationAddress1"
                      required
                      v-model="locationAddress1"
                    /></div>
                  </section>
                  <section class="col-sm-6 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="locationAddress2"
                      >Address2</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      id="locationAddress2"
                      placeholder="Address2"
                      name="locationAddress2"
                      v-model="locationAddress2"
                    />
                  </section>
                </div>
                <div class="form-row">
                  <section class="col-sm-4 form-group">
                    <label class="form-control-label sr-only" for="locationCity"
                      >City</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      id="locationCity"
                      placeholder="City"
                      name="locationCity"
                      required
                      v-model="locationCity"
                    />
                  </section>
                  <section class="col-sm-4 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="locationState"
                      >State</label
                    >
                    <select
                      class="form-control"
                      id="locationState"
                      name="locationState"
                      v-model="locationState"
                    >
                      <option disabled value="">Please select state</option>
                      <option
                        v-for="(option, index) in stateOptions"
                        v-bind:key="index"
                        v-bind:value="option.abbreviation"
                      >
                        {{ option.name }}
                      </option>
                    </select>
                  </section>
                  <section class="col-sm-2 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="locationZipCode"
                      >Zip Code</label
                    >
                    <masked-input
                      class="form-control"
                      id="locationZipCode"
                      placeholder="Zip Code"
                      name="locationZipCode"
                      required
                      v-model="locationZipCode"
                      mask="11111"
                    />
                  </section>
                  <section class="col-sm-2 form-group">
                    <label
                      class="form-control-label sr-only"
                      for="locationCountry"
                      >Country</label
                    >
                    <input
                      class="form-control"
                      type="text"
                      id="locationCountry"
                      name="locationCountry"
                      disabled
                      v-model="locationCountry"
                    />
                  </section>
                </div>
                  <section class="form-group">
                    <label
                      class="form-control-label sr-only"
                      for="comment"
                      >Comment</label
                    >
                    <textarea
                      class="form-control overflow-auto"
                      id="comment"
                      placeholder="(Optional) Leave your comment here ..."
                      name="comment"
                      v-model="comment"
                    />
                  </section>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit" id="addButton">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MaskedInput from 'vue-masked-input';

export default {
  data: function () {
    return {
      clientFirstName: null,
      clientLastName: null,
      clientEmail: null,
      clientPhone: null,
      clientCompany:null,
      landlordFirstName: null,
      landlordLastName: null,
      landlordEmail: null,
      landlordPhone: null,
      locationAddress1: null,
      locationAddress2: null,
      locationCity: null,
      locationState: "TX",
      locationZipCode: null,
      locationCountry: "USA",
      projectBusiness: null,
      quotePrice: null,
      soldPrice: null,
      projectCategory: "",
      projectType: "",
      projectStatus: "",
      soldDate: null,
      quoteDate: null,
      comment: null,
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
    handleAdd: function () {
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
        quotePrice: this.quotePrice,
        quoteDate: this.quoteDate,
        soldPrice: this.soldPrice,
        soldDate: this.soldDate,
        comment: this.comment
      };

      this.$emit("addProject", info);


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
      this.quotePrice = null;
      this.soldPrice = null;
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

      if(this.projectCategory == ""){
        this.errors.push("Please select project project category")
      }

      if(this.projectType == ""){
        this.errors.push("Please select project project type")
      }

      if(this.projectStatus == ""){
        this.errors.push("Please select project status")
      } else if(this.projectStatus == "Sold"){
        if(!this.soldPrice || !this.soldDate){
          this.errors.push("Please enter both sold date & price")
        }
      } else if(this.projectStatus == "Quote"){
        if(!this.quotePrice || !this.quoteDate){
          this.errors.push("Please enter both quote date & price")
        }
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
  components: {
    MaskedInput,
    FontAwesomeIcon
  },
};
</script>
