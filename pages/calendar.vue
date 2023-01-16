<template>
  <section>
    <h1>Calendar of {{ $auth.user.email }}</h1>
    <button class="btn btn-primary" @click="showUserDetails()">
      Show User
    </button>
    <button class="btn btn-primary" @click="fetchAllCalendarIds">
      Get Calendar List
    </button>
    <section v-if="calendarsExist">
      <ul>
        <li v-for="calendar in calendars" :key="calendar.id">
          {{ calendar.summary }}
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: "CalendarPage",
  data: function () {
    return {
      calendars: [],
    };
  },

  computed: {
    calendarsExist() {
      return this.calendars.length;
    },
  },

  methods: {
    showUserDetails() {
      console.log(this.$auth.user.name);
    },
    async fetchAllCalendarIds() {
      await this.$axios.$get("calendars").then((response) => {
        this.calendars = response.items;
      });
      console.log(this.calendars);
    },
  },
};
</script>

<style scoped></style>
