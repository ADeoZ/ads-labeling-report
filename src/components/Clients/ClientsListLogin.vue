<template>
  <v-btn variant="plain" color="success" size="large" @click="open">
    {{ login }}
  </v-btn>
</template>

<script>
export default {
  name: "ClientsListLogin",

  props: {
    login: {
      type: String,
      required: true,
    },
    openForm: {
      type: Function,
    },
  },

  methods: {
    open() {
      this.$props.openForm();
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  text-transform: none;
  font-weight: 600;
  padding: 0;
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
}
</style>
