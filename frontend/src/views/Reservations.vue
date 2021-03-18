<template>
  <div>
    <h1>Reservations</h1>
    <div v-if="reservations && reservations.length">
      <ul class="reservations-list">
        <li v-for="r in reservations" :key="r.id">
          {{ r.name }}
          <br />
          {{ r.email }}
        </li>
      </ul>
    </div>
    <div v-else>
      There are no reservations yet.
      <router-link to="/reservations/new">Click here to make a reservation</router-link>
    </div>
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
