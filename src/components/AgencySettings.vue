<template>
  <v-card
    title="Настройки агентства"
    max-width="800"
    variant="outlined"
    class="mx-auto my-12 pa-6 rounded-lg"
  >
    <v-form ref="form" v-model="valid" class="pa-8" :disabled="!editMode">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Наименование организации"
        variant="outlined"
        required
      />

      <v-text-field
        v-model="inn"
        :counter="12"
        :rules="innRules"
        label="ИНН"
        variant="outlined"
        required
      />

      <v-radio-group
        v-model="type"
        :rules="typeRules"
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
        <v-btn color="success" class="mr-4" @click="validate">Сохранить</v-btn>
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
</template>

<script>
export default {
  name: "AgencySettings",

  data: () => ({
    editMode: false,

    valid: true,

    name: "ООО «Медиаотдел»",
    nameRules: [(v) => !!v || "Наименование обязательно для указания"],

    inn: "7708757496",
    innRules: [(v) => !!v || "ИНН обязателен для указания"],

    type: "ul",
    typeRules: [(v) => !!v || "Тип обязателен для указания"],
  }),

  methods: {
    enterEditMode() {
      this.editMode = true;
    },
    cancelEditMode() {
      this.editMode = false;
    },
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Форма корректна");
      this.cancelEditMode();
    },
  },
};
</script>
