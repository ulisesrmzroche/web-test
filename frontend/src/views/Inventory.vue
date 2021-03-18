<template>
  <div>
    <h1>Inventory</h1>

    <p>Morning Reservations</p>
    {inventory.morning_reservations_count}
    <p>Afternoon Reservations</p>
    {inventory.afternoon_reservations_count}
    <p>Evening Reservations</p>
    {inventory.evening_reservations_count}

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Inventory',
    data () {
      return {
        inventory: this.inventory,
      }
    }
    async mounted() {
      try {
        this.inventory = await axios.get(`http://localhost:9090/inventories?date=today`)
      } catch (error) {
        alert("You have not created an inventory for today. Taking you to make one...)
        this.router.push('/inventories/new')
      }
    }
  }
</script>
