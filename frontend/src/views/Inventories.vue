<template>
  <div>
    <h1>Inventories</h1>
    <div v-if="inventories && inventories.length">
      <ul class="inventories-list">
        <li v-for="i in inventories" :key="i.id">
          {{ i.calendar_date }}
        </li>
      </ul>
    </div>
    <div v-else>
      There are no inventories yet.
      <router-link to="/inventories/new">Click here to make an inventory</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Inventories',
  data () {
    return {
      inventories: this.inventories,
    }
  },
  async mounted() {
    try {
      this.inventories = await axios.get('http://localhost:9090/invnetories')
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
