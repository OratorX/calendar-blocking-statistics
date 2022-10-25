<template>
  <section>
    <h1>Calendar of {{ $auth.user.email }}</h1>
    <button class="btn btn-primary" @click="showUserDetails()">
      Show User
    </button>
  </section>
</template>

<script>
export default {
  name: "CalendarPage",
  methods: {
    showUserDetails() {
      console.log(this.$auth.user.toString());
    },
  },
};
</script>

<style scoped></style>
