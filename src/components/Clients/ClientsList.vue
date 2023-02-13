<template>
  <v-container class="pa-16">
    <h4 class="text-h4">Список клиентов</h4>
    <div class="mt-8 d-flex justify-space-between">
      <v-responsive max-width="300" class="pt-2 d-flex align-center">
        <v-text-field
          v-model="searchQuery"
          label="Поиск"
          variant="outlined"
          density="compact"
          hint="Введите логин или наименование"
          clearable
        />
      </v-responsive>
      <div class="pt-2">
        <modal-form
          :modal-label="'Добавить клиента'"
          :button-label="'Добавить'"
          v-slot="{ closeModal }"
        >
          <add-client-form :closeForm="closeModal" />
        </modal-form>
      </div>
    </div>

    <v-table v-if="clients.length">
      <thead>
        <tr>
          <clients-list-headers
            v-for="header in listHeaders"
            :label="header.label"
            :sortable="header.sortable"
            :icon="sortColumn === header.name ? sortOrder : null"
            @clickHeader="selectSort(header.name)"
            :key="header.name"
          />
        </tr>
      </thead>
      <tbody>
        <clients-list-item
          v-for="client in pagedClients"
          :client="client"
          :key="client.id"
        />
      </tbody>
    </v-table>
    <v-alert
      class="mt-6 text-center"
      variant="outlined"
      type="warning"
      icon="mdi-emoticon-sad-outline"
      v-if="!this.filteredClients.length"
    >
      Список клиентов пуст.
    </v-alert>
    <div class="mt-6 text-center" v-if="this.clients.length">
      <v-pagination
        v-model="page"
        :length="totalPages"
        total-visible="10"
        rounded="circle"
      />
    </div>
    <error-snackbar :message="error" />
  </v-container>
</template>

<script>
import ModalForm from "@/components/base/ModalForm.vue";
import ErrorSnackbar from "@/components/base/ErrorSnackbar.vue";
import ClientsListItem from "@/components/Clients/ClientsListItem.vue";
import ClientsListHeaders from "@/components/Clients/ClientsListHeaders.vue";
import AddClientForm from "@/components/Clients/AddClientForm.vue";
import { mapState } from "vuex";

export default {
  name: "ClientsList",

  components: {
    ClientsListHeaders,
    ClientsListItem,
    ModalForm,
    AddClientForm,
    ErrorSnackbar,
  },

  data: () => ({
    listHeaders: [
      { name: "login", label: "Логин", sortable: true },
      { name: "name", label: "Наименование", sortable: true },
      { name: "type", label: "Тип", sortable: true },
      { name: "inn", label: "ИНН", sortable: false },
      { name: "is_end", label: "Прямой", sortable: true },
    ],
    searchQuery: "",
    sortColumn: "login",
    sortOrder: 1,
    page: 1,
    limit: 10,
  }),

  computed: {
    ...mapState({
      clients: (state) => state.clients.all,
      error: (state) => state.clients.error,
    }),
    filteredClients() {
      return this.clients.filter(
        (client) =>
          this.searchQuery == null ||
          client.login.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          client.contractor_name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );
    },
    sortedClients() {
      const compare = {
        login: (a, b) => a.login.localeCompare(b.login) * this.sortOrder,
        name: (a, b) =>
          a.contractor_name.localeCompare(b.contractor_name) * this.sortOrder,
        type: (a, b) =>
          a.contractor_type.localeCompare(b.contractor_type) * this.sortOrder,
        is_end: (a, b) =>
          (b.contractor_is_end - a.contractor_is_end) * this.sortOrder,
      };
      return [...this.filteredClients].sort(compare[this.sortColumn]);
    },
    pagedClients() {
      const offset = this.limit * this.page;
      return this.sortedClients.slice(offset - this.limit, offset);
    },
    totalPages() {
      return Math.ceil(this.filteredClients.length / this.limit);
    },
  },

  created() {
    this.$store.dispatch("clients/getAllClients");
  },

  methods: {
    selectSort(type) {
      if (this.sortColumn === type) {
        this.sortOrder *= -1;
      } else {
        this.sortColumn = type;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
th.th {
  font-size: 1rem;
  color: #001e3c;
}
</style>
