<template>
  <v-form
    v-if="!deletingProcess"
    ref="form"
    v-model="valid"
    @submit.prevent="submit"
  >
    <div class="px-16 pt-8 pb-4">
      <div v-if="!client.contractor_is_end" class="mb-4">
        <span class="text-h6">Контрагент</span>
        <v-divider></v-divider>
      </div>
      <v-text-field
        v-model="client.login"
        :rules="[...rules.login, ...checkLoginExist]"
        label="Логин в Яндекс.Директ"
        variant="outlined"
        required
        class="mb-2"
      />

      <v-text-field
        v-model="client.contractor_name"
        :rules="rules.name"
        label="Наименование организации"
        variant="outlined"
        required
        class="mb-2"
      />

      <v-text-field
        v-model="client.contractor_inn"
        :counter="client.contractor_type === 'ul' ? 10 : 12"
        :rules="[
          ...rules.inn,
          ...(client.contractor_type === 'ul'
            ? rules.entityInn
            : rules.individualInn),
        ]"
        label="ИНН"
        variant="outlined"
        required
        class="mb-2"
      />

      <v-radio-group
        v-model="client.contractor_type"
        :rules="rules.type"
        label="Тип организации"
        mandatory
        class="mb-2"
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
          class="mb-2"
        />

        <v-text-field
          v-model="client.advertiser_inn"
          :counter="client.advertiser_type === 'ul' ? 10 : 12"
          :rules="[
            ...rules.inn,
            ...(client.advertiser_type === 'ul'
              ? rules.entityInn
              : rules.individualInn),
          ]"
          label="ИНН"
          variant="outlined"
          required
          class="mb-2"
        />

        <v-radio-group
          v-model="client.advertiser_type"
          :rules="rules.type"
          label="Тип организации"
          mandatory
          class="mb-2"
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
      <div class="w-100 px-16 d-flex">
        <div v-if="!!this.$props.clientId">
          <v-btn color="cancel" class="my-4" @click="deleteClientStart"
            >Удалить</v-btn
          >
        </div>
        <div class="ml-auto">
          <v-btn type="submit" color="success" class="mr-4 my-4">
            Сохранить
          </v-btn>
          <v-btn color="cancel" variant="outlined" class="my-4" @click="cancel">
            Отмена
          </v-btn>
        </div>
      </div>
    </div>
  </v-form>

  <template v-if="deletingProcess">
    <v-alert type="warning" color="primary" class="mx-16 mt-8 mb-4">
      Удаление клиента <strong>{{ client.login }}</strong> приведёт к потере
      всех данных по нему.
    </v-alert>
    <div class="control-group">
      <v-divider></v-divider>
      <div class="w-100 px-16 d-flex">
        <div>
          <v-btn color="cancel" class="my-4" @click="deleteConfirm"
            >Удалить</v-btn
          >
        </div>
        <div class="ml-auto">
          <v-btn
            color="cancel"
            variant="outlined"
            class="my-4"
            @click="deleteCancel"
            >Отмена</v-btn
          >
        </div>
      </div>
    </div>
  </template>

  <error-snackbar :message="error" />
</template>

<script>
import ErrorSnackbar from "@/components/base/ErrorSnackbar.vue";
import { rules } from "@/utils/rules";

export default {
  name: "AgencySettings",

  components: {
    ErrorSnackbar,
  },

  props: {
    clientId: {
      type: String,
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
    rules,
    valid: true,
    deletingProcess: false,
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
    error() {
      return this.$store.state.clients.error;
    },
    status() {
      return this.$store.state.clients.status;
    },
    checkLoginExist() {
      const hasLogin = this.$store.getters["clients/checkClientExist"];
      return [
        (v) => !hasLogin(v, this.clientId) || "Такой логин уже существует",
      ];
    },
  },

  methods: {
    async submit() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        if (this.$props.clientId) {
          const id = this.$props.clientId;
          this.$store.dispatch("clients/editClient", { id, ...this.client });
        } else {
          this.$store.dispatch("clients/postClient", this.client);
        }
      }
    },
    cancel() {
      this.$props.closeForm();
    },
    deleteClientStart() {
      this.deletingProcess = true;
    },
    deleteConfirm() {
      this.$store.dispatch("clients/deleteClient", this.$props.clientId);
    },
    deleteCancel() {
      this.deletingProcess = false;
    },
  },

  watch: {
    status() {
      if (this.status === "success") this.$props.closeForm();
    },
  },
};
</script>

<style></style>
