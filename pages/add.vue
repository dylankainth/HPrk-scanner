<template>
  <div>
    <form>
      <h5>Initial Details</h5>
      <div class="row mb-3">
        <label for="itemnumber" class="col-sm-2 col-form-label"
          >Item Number</label
        >
        <div class="col-sm-10">
          <input type="number" class="form-control" id="itemnumber" v-model="formdata.itemnumber" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="quantity" class="col-sm-2 col-form-label">Quantity</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="quantity" v-model="formdata.quantity"/>
        </div>
      </div>
      <div class="row mb-3">
        <label for="vendor" class="col-sm-2 col-form-label"
          >Vendor / Hardware Manufacturer</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="vendor" v-model="formdata.vendor"/>
        </div>
      </div>
      <div class="row mb-3">
        <label for="category" class="col-sm-2 col-form-label">Category</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="category" v-model="formdata.category"/>
        </div>
      </div>

      <h5>Location</h5>
      <div class="row mb-3">
        <label for="location1" class="col-sm-2 col-form-label"
          >Location 1</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="location1" v-model="formdata.location1"/>
        </div>
      </div>
      <div class="row mb-3">
        <label for="location2" class="col-sm-2 col-form-label"
          >Location 2</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="location2" v-model="formdata.location2" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="location3" class="col-sm-2 col-form-label"
          >Location 3</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="location3"  v-model="formdata.location3"/>
        </div>
      </div>

      <h5>Details</h5>
      <div class="row mb-3">
        <label for="modelnumber" class="col-sm-2 col-form-label"
          >Model Number</label
        >
        <div class="col-sm-10">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="modelnumber"
              aria-label="Model Number"
              aria-describedby="modelnumberscan"
              v-model="formdata.modelnumber"
            />
            <button class="btn btn-warning" @click="modelscantoggle" type="button" id="modelnumberscan" data-bs-toggle="collapse" data-bs-target="#modelnumberscanner" aria-expanded="false" aria-controls="modelnumberscanner">
              <i data-feather="camera" style="color: white"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="collapse row mb-3" id="modelnumberscanner">
        <div class="card card-body" style="height:600px">
          <h6>Scan Model Number</h6>

          <v-quagga v-if="pagestate.modelcamera"
      :onDetected="modellogIt"
      :readerSize="quagga.readerSize"
      :readerTypes="['ean_reader']"
    ></v-quagga>
    
        </div>
      </div>

      
      <div class="row mb-3">
        <label for="serialnumber" class="col-sm-2 col-form-label"
          >Serial Number</label
        >
        <div class="col-sm-10">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="serialnumber"
              aria-label="Serial Number"
              aria-describedby="serialnumberscan"
              v-model="formdata.serialnumber"
            />
            <button @click="serialscantoggle" class="btn btn-warning" type="button" id="serialnumberscan" data-bs-toggle="collapse" data-bs-target="#serialnumberscanner" aria-expanded="false" aria-controls="serialnumberscanner">
              <i data-feather="camera" style="color: white"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="collapse row mb-3" id="serialnumberscanner">
        <div class="card card-body" style="height:600px">
          <h6>Scan Serial Number</h6>

          <v-quagga v-if="pagestate.serialcamera"
      :onDetected="seriallogit"
      :readerSize="quagga.readerSize"
      :readerTypes="['ean_reader']"
    ></v-quagga>
    
        </div>
      </div>

      <h5>Status</h5>

      <div class="row mb-3">
        <label for="discardstatus" class="col-sm-2 col-form-label"
          >Action</label
        >
        <div class="col-sm-10">
          <div class="form-floating">
            <select
              class="form-select"
              id="discardstatus"
              aria-label="Floating label select example"
              v-model="formdata.discardstatus"
            >
              <option selected value="Retain">Retain</option>
              <option value="Discard">Discard</option>
            </select>
            <label for="discardstatus">Select an option</label>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <label for="checkedout" class="col-sm-2 col-form-label"
          >Checked out with</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="checkedout" v-model="formdata.checkedout" />
        </div>
      </div>

      <h5>Miscellaneous</h5>
      <div class="row mb-3">
        <label for="comments" class="col-sm-2 col-form-label">Comments</label>
        <div class="col-sm-10">
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="comments"
              v-model="formdata.comments"
            ></textarea>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-lg">Submit</button>
    </form>

  </div>
</template>

<script>
export default {
  mounted() {
    feather.replace();
  },
  data() {
    return {
      formdata:{
        itemnumber: '',
        quantity: '',
        vendor:'',
        category: '',
        location1: '',
        location2: '',
        location3: '',
        modelnumber: '',
        serialnumber: '',
        discardstatus: '',
        checkedout: '',
        comments: ''
      },
    
      pagestate:{
        modelcamera:false,
        serialcamera:false
      },
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
    serialscantoggle(){
      this.pagestate.serialcamera = !this.pagestate.serialcamera;
    },
    modelscantoggle(){
      this.pagestate.modelcamera = !this.pagestate.modelcamera;
    },
    seriallogit(data) {
      this.formdata.serialnumber = (data.codeResult.code);
    },
    modellogIt(data) {
      this.formdata.modelnumber = (data.codeResult.code);
    },
  },
};
</script>
