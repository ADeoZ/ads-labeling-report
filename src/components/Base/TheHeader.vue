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

    <logout-button />
  </v-app-bar>
</template>

<script>
import LogoutButton from "@/components/Base/LogoutButton.vue";

export default {
  name: "TheHeader",

  components: {
    LogoutButton,
  },
};
</script>
