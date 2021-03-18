<template>
  <div>
    <h1>New Inventory</h1>
    <p>Set how many reservations you want to accept every 15 minutes.</p>
    <FormulateForm
      v-model="inventory"
      @submit="submitHandler"
    >
    <FormulateInput
      name="morning_reservations_count"
      label="How many morning reservations? (11am - 3pm)"
      validation="required"
      type="number"
    />
    <FormulateInput
      name="afternoon_reservations_count"
      label="How many afternoon reservations? (3pm - 6pm)"
      validation="required|number"
      type="number"
    />
    <FormulateInput
      name="evening_reservations_count"
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
  name: 'NewInventory',
    data () {
      return {
        inventory: {}
      }
    },
    methods: {
      async submitHandler (data) {
        try {
          this.inventory = await axios.post('http://localhost:9090/inventories', data)
          alert(`Successfully Created Inventory`)
          this.router.transition('/inventories/:id', this.inventory.id)
        } catch (e) {
          alert(`There was an error: ${e}. Try fixing it...`);
        }
        
    }
  }
}
</script>
