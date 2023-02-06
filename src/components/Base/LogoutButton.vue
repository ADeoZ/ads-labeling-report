<template>
  <v-btn class="px-0 mr-4" variant="plain" :ripple="false" @click="logout">
    Выйти
  </v-btn>
</template>

<script>
export default {
  name: "LogoutButton",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>
