<template>
  <v-app-bar color="primary" elevation="0">
    <v-app-bar-title>
      <v-img
        contain
        src="@/assets/logo.png"
        height="64"
        width="230"
        alt="Helen Media Logo"
      ></v-img>
    </v-app-bar-title>

    <logout-button v-if="isLogged" />
  </v-app-bar>
</template>

<script>
import LogoutButton from "@/components/base/LogoutButton.vue";

export default {
  name: "TheHeader",

  components: {
    LogoutButton,
  },

  computed: {
    isLogged() {
      return this.$store.state.auth.loggedStatus;
    },
  },
};
</script>
