<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    color="error"
    elevation="24"
  >
    {{ message }}
    <template v-slot:actions>
      <v-btn icon="mdi-close" size="x-small" @click="close" />
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "ErrorSnackbar",

  props: {
    message: {
      type: [String, null],
      required: true,
    },
  },

  data: () => ({
    snackbar: false,
    timeout: 5000,
  }),

  methods: {
    close() {
      this.snackbar = false;
    },
  },

  watch: {
    message() {
      this.snackbar = this.message ? true : false;
    },
  },
};
</script>

<style></style>
