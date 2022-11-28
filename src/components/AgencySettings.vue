<template>
  <v-form ref="form" v-model="valid" class="pa-10">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Наименование организации"
      variant="outlined"
      required
    />

    <v-text-field
      v-model="inn"
      :counter="10"
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
      <v-radio label="Физическое лицо" value="fl" />
    </v-radio-group>

    <v-btn color="success" class="mr-4" @click="validate"> Сохранить </v-btn>
    <v-btn color="error" class="mr-4" @click="reset"> Отмена </v-btn>
  </v-form>
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

      if (valid) alert("Form is valid");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
