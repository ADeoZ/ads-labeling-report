<template>
  <v-form ref="form" v-model="valid">
    <div class="px-16 pt-8 pb-4">
      <div v-if="!client.contractor_is_end" class="mb-4">
        <span class="text-h6">Контрагент</span>
        <v-divider></v-divider>
      </div>
      <v-text-field
        v-model="client.login"
        :rules="rules.login"
        label="Логин в Яндекс.Директ"
        variant="outlined"
        required
      />

      <v-text-field
        v-model="client.contractor_name"
        :rules="rules.name"
        label="Наименование организации"
        variant="outlined"
        required
      />

      <v-text-field
        v-model="client.contractor_inn"
        :counter="12"
        :rules="rules.inn"
        label="ИНН"
        variant="outlined"
        required
      />

      <v-radio-group
        v-model="client.contractor_type"
        :rules="rules.type"
        label="Тип организации"
        mandatory
      >
        <v-radio label="Юридическое лицо" value="ul" />
        <v-radio label="Физическое лицо" value="ip" />
      </v-radio-group>

      <v-row>
        <v-col class="py-0">
          <v-text-field
            v-model="client.contract_number"
            :rules="rules.contract_number"
            label="Номер договора"
            variant="outlined"
            required
          />
        </v-col>
        <v-col class="py-0">
          <v-text-field
            v-model="client.contract_date"
            :rules="rules.contract_date"
            label="Дата договора"
            variant="outlined"
            type="date"
            required
          />
        </v-col>
      </v-row>

      <v-switch
        v-model="client.contractor_is_end"
        color="primary"
        label="Прямой рекламодатель"
      />

      <template v-if="!client.contractor_is_end">
        <div class="mb-4">
          <span class="text-h6">Конечный рекламодатель</span>
          <v-divider></v-divider>
        </div>

        <v-text-field
          v-model="client.advertiser_name"
          :rules="rules.name"
          label="Наименование организации"
          variant="outlined"
          required
        />

        <v-text-field
          v-model="client.advertiser_inn"
          :counter="12"
          :rules="rules.inn"
          label="ИНН"
          variant="outlined"
          required
        />

        <v-radio-group
          v-model="client.advertiser_type"
          :rules="rules.type"
          label="Тип организации"
          mandatory
        >
          <v-radio label="Юридическое лицо" value="ul" />
          <v-radio label="Физическое лицо" value="ip" />
        </v-radio-group>

        <v-row>
          <v-col class="py-0">
            <v-text-field
              v-model="client.advertiser_contract_number"
              :rules="rules.contract_number"
              label="Номер договора"
              variant="outlined"
              required
            />
          </v-col>
          <v-col class="py-0">
            <v-text-field
              type="date"
              v-model="client.advertiser_contract_date"
              :rules="rules.contract_date"
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
    clientId: {
      type: Number,
    },
    closeForm: {
      type: Function,
    },
  },

  data: () => ({
    client: {
      login: "",
      contractor_name: "",
      contractor_inn: "",
      contractor_type: "ul",
      contract_number: "",
      contract_date: "",
      contractor_is_end: true,
      advertiser_name: "",
      advertiser_inn: "",
      advertiser_type: "ul",
      advertiser_contract_number: "",
      advertiser_contract_date: "",
    },
    rules: {
      login: [(v) => !!v || "Логин обязателен для указания"],
      name: [(v) => !!v || "Наименование обязательно для указания"],
      inn: [(v) => !!v || "ИНН обязателен для указания"],
      type: [(v) => !!v || "Тип обязателен для указания"],
      contract_number: [(v) => !!v || "Номер договора обязателен для указания"],
      contract_date: [(v) => !!v || "Дата договора обязательна для указания"],
    },
    valid: true,
  }),

  created() {
    if (this.$props.clientId) {
      Object.assign(this.client, this.getClient);
    }
  },

  computed: {
    getClient() {
      return this.$store.getters["clients/getClientById"](this.clientId);
    },
  },

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
