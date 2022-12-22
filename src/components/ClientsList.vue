<template>
  <v-container class="pa-16">
    <h4 class="text-h4">Список клиентов</h4>
    <modal-form
      :modal-label="'Добавить клиента'"
      :button-label="'Добавить'"
      v-slot="{ closeModal }"
    >
      <add-client-form :closeForm="closeModal" />
    </modal-form>
    <v-table class="mt-10">
      <thead>
        <tr>
          <th class="text-left text-subtitle-1">Логин</th>
          <th class="text-left text-subtitle-1">Наименование</th>
          <th class="text-left text-subtitle-1">Тип</th>
          <th class="text-left text-subtitle-1">ИНН</th>
          <th class="text-left text-subtitle-1">Прямой</th>
        </tr>
      </thead>
      <tbody>
        <clients-list-item
          v-for="client in clients"
          :client="client"
          :key="client.id"
        />
      </tbody>
    </v-table>
    <error-snackbar :message="error" />
  </v-container>
</template>

<script>
import ModalForm from "@/components/Base/ModalForm.vue";
import ErrorSnackbar from "@/components/Base/ErrorSnackbar.vue";
import ClientsListItem from "@/components/ClientsListItem.vue";
import AddClientForm from "@/components/AddClientForm.vue";
import { mapState } from "vuex";

export default {
  name: "ClientsList",
  components: {
    ClientsListItem,
    ModalForm,
    AddClientForm,
    ErrorSnackbar,
  },
  computed: mapState({
    clients: (state) => state.clients.all,
    error: (state) => state.clients.error,
  }),
  created() {
    this.$store.dispatch("clients/getAllClients");
  },
};
</script>

<style lang="scss" scoped>
th.th {
  font-size: 1rem;
  color: #001e3c;
}
</style>
