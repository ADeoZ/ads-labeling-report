<template>
  <v-card
    title="Создание отчёта"
    max-width="800"
    variant="outlined"
    class="mx-auto my-12 pa-6 rounded-lg"
  >
    <v-form ref="form" v-model="valid" class="pa-8">
      <v-file-input
        variant="outlined"
        :rules="fileRules"
        accept=".xls,.xlsx"
        label="Загрузите файл Яндекса"
        show-size
        required
      />
      <div class="w-100 d-flex justify-end">
        <v-btn color="success" class="mr-4" @click="validate">
          Сгенерировать
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "CreateReport",

  data: () => ({
    valid: true,
    fileRules: [
      (value) => {
        return (
          !value ||
          !value.length ||
          value[0].size < 2000000 ||
          "Размер файла превышает 2Мб"
        );
      },
    ],
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

<style></style>
