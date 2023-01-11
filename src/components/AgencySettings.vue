<template>
  <v-card
    title="Настройки агентства"
    max-width="800"
    variant="outlined"
    class="mx-auto my-12 pa-6 rounded-lg"
  >
    <v-form
      class="pa-8"
      ref="form"
      v-model="valid"
      @submit.prevent="submit"
      :disabled="!editMode"
    >
      <v-text-field
        v-model="agency.name"
        :rules="rules.name"
        label="Наименование организации"
        variant="outlined"
        required
      />

      <v-text-field
        v-model="agency.inn"
        :counter="agency.type === 'ul' ? 10 : 12"
        :rules="[
          ...rules.inn,
          ...(agency.type === 'ul' ? rules.entityInn : rules.individualInn),
        ]"
        label="ИНН"
        variant="outlined"
        required
      />

      <v-radio-group
        v-model="agency.type"
        :rules="rules.type"
        label="Тип организации"
        mandatory
      >
        <v-radio label="Юридическое лицо" value="ul" />
        <v-radio label="Физическое лицо" value="ip" />
      </v-radio-group>

      <div v-if="!editMode" class="w-100 d-flex justify-end">
        <v-btn color="primary" class="mr-4" @click="enterEditMode"
          >Редактировать</v-btn
        >
      </div>
      <div v-else class="w-100 d-flex justify-end">
        <v-btn type="submit" color="success" class="mr-4">Сохранить</v-btn>
        <v-btn
          color="cancel"
          variant="outlined"
          class="mr-4"
          @click="cancelEditMode"
          >Отмена</v-btn
        >
      </div>
    </v-form>
  </v-card>

  <error-snackbar :message="error" />
</template>

<script>
import ErrorSnackbar from "@/components/Base/ErrorSnackbar.vue";
import { rules } from "@/utils/rules";

export default {
  name: "AgencySettings",

  components: {
    ErrorSnackbar,
  },

  data: () => ({
    agency: {
      name: "",
      type: "",
      inn: "",
    },
    rules,
    valid: true,
    cachedData: {},
    editMode: false,
  }),

  async created() {
    await this.$store.dispatch("agency/getAgencyData");
    Object.assign(this.agency, this.$store.state.agency.data);
  },

  computed: {
    error() {
      return this.$store.state.agency.error;
    },
    status() {
      return this.$store.state.agency.status;
    },
  },

  methods: {
    enterEditMode() {
      this.editMode = true;
      Object.assign(this.cachedData, this.agency);
    },
    cancelEditMode() {
      this.editMode = false;
      Object.assign(this.agency, this.cachedData);
    },
    async submit() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        await this.$store.dispatch("agency/editAgency", {
          id: 1,
          ...this.agency,
        });
        if (this.status === "success") {
          this.editMode = false;
        }
      }
    },
  },
};
</script>
