<template>
  <v-card
    title="Создание отчёта"
    max-width="800"
    variant="outlined"
    class="mx-auto my-12 pa-6 rounded-lg"
  >
    <v-form ref="form" v-model="valid" class="pa-8">
      <v-file-input
        v-model="report"
        variant="outlined"
        :rules="fileRules"
        accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
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

  <error-snackbar :message="error" />
</template>

<script>
import { reportAPI } from "@/api/reportAPI";
import ErrorSnackbar from "@/components/Base/ErrorSnackbar.vue";

export default {
  name: "CreateReport",

  components: {
    ErrorSnackbar,
  },

  data: () => ({
    report: [],
    valid: true,
    fileRules: [
      (v) => {
        if (!v || !v.length) return "Файл обязателен для загрузки";
        if (v[0].size > 3000000) return "Размер файла превышает 3Мб";
        return true;
      },
    ],
    error: null,
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        const formData = new FormData();
        formData.append("file", this.report[0]);
        try {
          this.error = null;
          const response = await reportAPI.postFile(formData);
          console.log("response", response);
        } catch (error) {
          this.error = "Ошибка отправки данных";
        }
      }
    },
  },
};
</script>

<style></style>
