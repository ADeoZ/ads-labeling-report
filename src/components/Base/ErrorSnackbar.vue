<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    color="error"
    elevation="24"
  >
    {{ message }}

    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="snackbar = false">
        <v-icon light color="white">mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "ErrorSnackbar",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    snackbar: true,
    timeout: 5000,
  }),
};
</script>

<style></style>
