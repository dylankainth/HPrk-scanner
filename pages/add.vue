<template>
  <div>
    <form>
      <h5>Initial Details</h5>
      <div class="row mb-3">
        <label for="inputitemnumber" class="col-sm-2 col-form-label">Item Number</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="inputitemnumber" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="quantity" class="col-sm-2 col-form-label">Quantity</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="quantity" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="vendor" class="col-sm-2 col-form-label">Vendor / Hardware Manufacturer</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="vendor" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="category" class="col-sm-2 col-form-label">Category</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="category" />
        </div>
      </div>

      <h5>Location</h5>
      <div class="row mb-3">
        <label for="location1" class="col-sm-2 col-form-label"
          >Location 1</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="location1" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="location2" class="col-sm-2 col-form-label"
          >Location 2</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="location2" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="location3" class="col-sm-2 col-form-label"
          >Location 3</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="location3" />
        </div>
      </div>

      <h5>Details</h5>
      <div class="row mb-3">
        <label for="modelnumber" class="col-sm-2 col-form-label"
          >Model Number</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="modelnumber" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="serialnumber" class="col-sm-2 col-form-label"
          >Serial Number</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="serialnumber" />
        </div>
      </div>


      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="gridRadios1">
              First radio
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label class="form-check-label" for="gridRadios2">
              Second radio
            </label>
          </div>
          <div class="form-check disabled">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios3"
              value="option3"
              disabled
            />
            <label class="form-check-label" for="gridRadios3">
              Third disabled radio
            </label>
          </div>
        </div>
      </fieldset>
      <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1" />
            <label class="form-check-label" for="gridCheck1">
              Example checkbox
            </label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>

    <v-quagga
      :onDetected="logIt"
      :readerSize="quagga.readerSize"
      :readerTypes="['ean_reader']"
    ></v-quagga>
  </div>
</template>

<script>
import Vue from "vue";
import VueQuagga from "vue-quaggajs";

// register component 'v-quagga'
Vue.use(VueQuagga);

export default {
  name: "VueBarcodeTest",
  data() {
    return {
      quagga: {
        readerSize: {
          width: 640,
          height: 480,
        },
        detecteds: [],
      },
    };
  },
  methods: {
    logIt(data) {
      console.log("detected", data);
    },
  },
};
</script>
