<template>
  <div>
    <h1>New Inventory</h1>
    <p>Set how many reservations you want to accept every 15 minutes.</p>
    <FormulateForm
      v-model="inventory"
      @submit="submitHandler"
    >
    <FormulateInput
      name="morningReservations"
      label="How many morning reservations? (11am - 3pm)"
      validation="required"
      type="number"
    />
    <FormulateInput
      name="afternoon-reservations"
      label="How many afternoon reservations? (3pm - 6pm)"
      validation="required|number"
      type="number"
    />
    <FormulateInput
      name="evening-reservations"
      label="How many evening reservations? (6pm - 11pm)"
      validation="required|number"
      type="number"
    />
    <FormulateInput
      type="submit"
      label="Sign up"
    />
    </FormulateForm>
  </div>
  
</template>
<script>

import axios from 'axios'
export default {
  name: 'NewReservation',
    data () {
      return {
        reservation: {}
      }
    },
    methods: {
      async submitHandler (data) {
        await axios.post('http://localhost:9090/inventories/new', data)
        alert(`Thank you`)
    }
  }
}
</script>
