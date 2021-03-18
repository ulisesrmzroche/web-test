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
    />
    <FormulateInput
      name="email"
      label="What is your email?"
      validation="required|text|max:120"
    />
    <FormulateInput
      name="partySize"
      label="What is your party size?"
      validation="required|number|max:10"
      type="select"
    />
    <FormulateInput
      name="date"
      label="What is the reservation date??"
      validation="required|text|max:120"
      type="select"
    />
    <FormulateInput
      name="time"
      label="What is the reservation time??"
      validation="required|text|max:120"
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
