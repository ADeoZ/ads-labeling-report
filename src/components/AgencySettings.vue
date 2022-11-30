<template>
  <v-card
    title="Настройки агентства"
    max-width="800"
    variant="outlined"
    class="mx-auto my-12 pa-6 rounded-lg"
  >
    <v-form ref="form" v-model="valid" class="pa-8">
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

      <div class="w-100 d-flex justify-end">
        <v-btn color="success" class="mr-4" @click="validate">Сохранить</v-btn>
        <v-btn color="error" class="mr-4" @click="reset">Отмена</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "AgencySettings",

  data: () => ({
    valid: true,

    name: "",
    nameRules: [(v) => !!v || "Наименование обязательно для указания"],

    inn: "",
    innRules: [(v) => !!v || "ИНН обязателен для указания"],

    type: "ul",
    typeRules: [(v) => !!v || "Тип обязателен для указания"],
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Форма корректна");
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
