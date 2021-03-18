<template>
  <div>
    <h1>New Reservation</h1>
    <FormulateForm
      v-model="reservation"
    >
    <FormulateInput
      name="name"
      label="What is your name?"
      validation="required"
      type="text"
    />
    <FormulateInput
      name="email"
      label="What is your email?"
      validation="required|email"
      type="email"
    />
    <FormulateInput
      name="partySize"
      label="What is your party size?"
      type="select"
      :options="['1', '2', '3', '4', '5', '6']"
    />
    <FormulateInput
      name="date"
      label="What is the reservation date??"
      type="select"
    />
    <FormulateInput
      name="time"
      label="What is the reservation time??"
      type="select"
    />
    <FormulateInput
      type="submit"
      label="Sign up"
    />
    </FormulateForm>
  </div>
  
</template>
<script>

export default {
  name: 'NewReservation',
    data () {
    return {
      reservation: {}
    }
  }
}
</script>
