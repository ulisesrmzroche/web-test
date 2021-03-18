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
      type="date"
    />
    
    <FormulateInput
      name="time"
      label="What is the reservation time??"
      type="select"
      :option-groups="{
        Morning: {
          1100: '11am',
          1115: '11:15 am',
          1130: '11:30 am',
          1145: '11:45 am',
          1200: '12pm',
          1215: '12:15 pm',
          1230: '12:30 pm',
          1245: '12:45 pm',
          1300: '1pm',
          1315: '1:15 pm',
          1330: '1:30 pm',
          1345: '1:45 pm',
          1400: '2pm',
          1415: '2:15 pm',
          1430: '2:30 pm',
          1445: '2:45 pm',
        },
        Afternoon: {
          1500: '3pm',
          1515: '3:15 pm',
          1530: '3:30 pm',
          1545: '3:45 pm',
          1600: '4pm',
          1615: '4:15 pm',
          1630: '4:30 pm',
          1645: '4:45 pm',
          1700: '5pm',
          1715: '5:15 pm',
          1730: '5:30 pm',
          1745: '5:45 pm',
        },
        Evening: {
          1800: '6pm',
          1815: '6:15 pm',
          1830: '6:30 pm',
          1845: '6:45 pm',
          1900: '7pm',
          1915: '7:15 pm',
          1930: '7:30 pm',
          1945: '7:45 pm',
          2000: '8pm',
          2015: '8:15 pm',
          2030: '8:30 pm',
          2045: '8:45 pm',
          2100: '9pm',
          2115: '9:15 pm',
          2130: '9:30 pm',
          2145: '9:45 pm',
          2200: '10pm',
        }
      }"
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
