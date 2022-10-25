<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger mb-2">
      Need login first
    </div>
    <form @submit.prevent="onSubmit()">
      <h1>Logout page</h1>
      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>
      <button class="btn btn-primary" type="submit">Logout</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "LogoutPage",
  layout: "empty",
  methods: {
    onSubmit() {
      this.$auth.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
</style>
