<template>
  <v-btn color="primary" size="small" class="mt-6" @click="openModal">
    {{ buttonLabel }}
  </v-btn>
  <v-dialog v-model="modal" width="800">
    <v-container>
      <v-toolbar
        v-if="modalLabel"
        :title="modalLabel"
        color="app-bars"
        class="text-center"
      />

      <v-card class="ma-auto">
        <v-card-text>
          <slot :close="closeModal" />
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn
            color="primary"
            size="small"
            class="mt-6"
            @click="modal = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-container>
  </v-dialog>
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

<style></style>
