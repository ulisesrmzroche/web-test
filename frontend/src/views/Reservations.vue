<template>
  <div>
    <h1>Reservations</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Reservations',
  data () {
    return {
      reservations: this.reservations,
    }
  },
  async mounted() {
    try {
      this.reservations = await axios.get('http://localhost:9090/reservations')
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
