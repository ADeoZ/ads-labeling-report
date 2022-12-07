<template>
  <v-btn color="primary" size="small" class="mt-6" @click="openModal">
    {{ buttonLabel }}
  </v-btn>
  <v-row justify="center">
    <v-dialog v-model="modal" width="800" scrollable>
      <v-toolbar v-if="modalLabel" :title="modalLabel" color="app-bars" />
      <v-card>
        <v-card-text class="pa-0">
          <slot :closeModal="closeModal"></slot>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ModalContainer",
  props: {
    modalLabel: {
      type: String,
    },
    buttonLabel: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
};
</script>

<style scoped>
.v-card-text {
  height: 70vh;
}
:deep(.control-group) {
  position: sticky;
  bottom: 0;
  background-color: rgb(var(--v-theme-surface));
}
</style>
