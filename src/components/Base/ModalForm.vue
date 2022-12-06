<template>
  <v-btn color="primary" size="small" class="mt-6" @click="openModal">
    {{ buttonLabel }}
  </v-btn>
  <!-- <v-dialog v-model="modal" width="800" scrollable>
    <v-container>
      <v-toolbar
        v-if="modalLabel"
        :title="modalLabel"
        color="app-bars"
        class="text-center"
      />

      <v-card class="ma-auto">
        <v-card-text style="height: 800px"> -->
  <v-row justify="center">
    <v-dialog v-model="modal" width="800" scrollable>
      <v-toolbar v-if="modalLabel" :title="modalLabel" color="app-bars" />
      <v-card>
        <v-divider></v-divider>
        <v-card-text style="height: 62vh">
          <slot :closeForm="closeModal" />
        </v-card-text>
        <v-divider></v-divider>
        <div class="my-4 w-100 d-flex justify-end">
          <v-btn color="success" class="mr-4" @click="submit">Сохранить</v-btn>
          <v-btn color="error" class="mr-4" @click="closeModal">Отмена</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- </v-card-text>
      </v-card>
    </v-container>
  </v-dialog> -->
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
    submit() {
      console.log(this.$refs.form);
    },
  },
};
</script>

<style></style>
