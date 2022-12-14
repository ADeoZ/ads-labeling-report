<template>
  <tr>
    <td>
      <modal-form :modal-label="'Редактировать клиента'">
        <template #button="{ openModal }">
          <clients-list-login :login="client.login" :openForm="openModal" />
        </template>
        <template #default="{ closeModal }">
          <add-client-form :closeForm="closeModal" />
        </template>
      </modal-form>
    </td>
    <td>{{ client.contractor_name }}</td>
    <td>{{ translate_type }}</td>
    <td>{{ client.contractor_inn }}</td>
    <td>{{ translate_is_end }}</td>
  </tr>
</template>

<script>
import ModalForm from "@/components/Base/ModalForm.vue";
import AddClientForm from "@/components/AddClientForm.vue";
import ClientsListLogin from "./ClientsListLogin.vue";

export default {
  name: "ClientsListItem",
  components: {
    ModalForm,
    AddClientForm,
    ClientsListLogin,
  },
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
  computed: {
    translate_type() {
      return this.client.contractor_type === "ul" ? "юр. лицо" : "ИП";
    },
    translate_is_end() {
      return this.client.contractor_is_end ? "Да" : "Нет";
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  &:nth-child(2n) {
    background-color: rgb(var(--v-theme-success), 0.08);
  }
  &:hover {
    background-color: #f57c0059;
  }
}
td:first-child {
  font-weight: bold;
}
</style>
