<template>
  <v-form ref="form" v-model="valid">
    <div class="px-16 pt-8 pb-4">
      <div v-if="!isEnd" class="mb-4">
        <span class="text-h6">Контрагент</span>
        <v-divider></v-divider>
      </div>
      <v-text-field
        v-model="login"
        :rules="loginRules"
        label="Логин в Яндекс.Директ"
        variant="outlined"
        required
      />

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

      <v-row>
        <v-col class="py-0">
          <v-text-field
            v-model="contractNumber"
            :rules="contractNumberRules"
            label="Номер договора"
            variant="outlined"
            required
          />
        </v-col>
        <v-col class="py-0">
          <v-text-field
            type="date"
            v-model="contractDate"
            :rules="contractDateRules"
            label="Дата договора"
            variant="outlined"
            required
          />
        </v-col>
      </v-row>

      <v-switch v-model="isEnd" color="primary" label="Прямой рекламодатель" />

      <template v-if="!isEnd">
        <div class="mb-4">
          <span class="text-h6">Конечный рекламодатель</span>
          <v-divider></v-divider>
        </div>

        <v-text-field
          v-model="endName"
          :rules="nameRules"
          label="Наименование организации"
          variant="outlined"
          :required="!isEnd"
        />

        <v-text-field
          v-model="endInn"
          :counter="12"
          :rules="innRules"
          label="ИНН"
          variant="outlined"
          :required="!isEnd"
        />

        <v-radio-group
          v-model="endType"
          :rules="typeRules"
          label="Тип организации"
          :mandatory="!isEnd"
        >
          <v-radio label="Юридическое лицо" value="ul" />
          <v-radio label="Физическое лицо" value="ip" />
        </v-radio-group>

        <v-row>
          <v-col class="py-0">
            <v-text-field
              v-model="endContractNumber"
              :rules="contractNumberRules"
              label="Номер договора"
              variant="outlined"
              required
            />
          </v-col>
          <v-col class="py-0">
            <v-text-field
              type="date"
              v-model="endContractDate"
              :rules="contractDateRules"
              label="Дата договора"
              variant="outlined"
              required
            />
          </v-col>
        </v-row>
      </template>
    </div>

    <div class="control-group">
      <v-divider></v-divider>
      <div class="w-100 px-16 d-flex justify-end">
        <v-btn color="success" class="mr-4 my-4" @click="validate"
          >Сохранить</v-btn
        >
        <v-btn color="cancel" variant="outlined" class="my-4" @click="cancel"
          >Отмена</v-btn
        >
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  name: "AgencySettings",

  props: {
    closeForm: {
      type: Function,
    },
  },

  data: () => ({
    valid: true,

    login: "",
    loginRules: [(v) => !!v || "Логин обязателен для указания"],

    name: "",
    nameRules: [(v) => !!v || "Наименование обязательно для указания"],

    inn: "",
    innRules: [(v) => !!v || "ИНН обязателен для указания"],

    type: "ul",
    typeRules: [(v) => !!v || "Тип обязателен для указания"],

    contractNumber: "",
    contractNumberRules: [
      (v) => !!v || "Номер договора обязателен для указания",
    ],

    contractDate: "",
    contractDateRules: [(v) => !!v || "Дата договора обязательна для указания"],

    isEnd: true,

    endName: "",
    endInn: "",
    endType: "ul",
    endContractNumber: "",
    endContractDate: "",
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Форма корректна");
    },
    cancel() {
      this.$props.closeForm();
    },
  },
};
</script>

<style></style>
