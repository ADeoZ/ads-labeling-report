<template>
  <v-container class="pa-16">
    <h4 class="text-h4">Список клиентов</h4>
    <modal-form :modal-label="'Добавить клиента'" :button-label="'Добавить'">
      <template v-slot="{ close }">
        <add-client-form :closeForm="close" />
      </template>
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
  </v-container>
</template>

<script>
import ClientsListItem from "@/components/ClientsListItem.vue";
import ModalForm from "@/components/Base/ModalForm.vue";
import AddClientForm from "./AddClientForm.vue";

export default {
  name: "ClientsList",
  components: {
    ClientsListItem,
    ModalForm,
    AddClientForm,
  },
  data: () => ({
    clients: [
      {
        id: 1,
        login: "narugka2007",
        contractor_name: "ООО «Мануфактура»",
        contractor_type: "ul",
        contractor_inn: "7708757560",
        contractor_is_end: 1,
      },
      {
        id: 2,
        login: "unikom00907",
        contractor_name: 'ООО "ЮНИКОМ"',
        contractor_type: "ul",
        contractor_inn: "7708587614",
        contractor_is_end: 1,
      },
      {
        id: 3,
        login: "mielnedvig",
        contractor_name: "ООО «Компания «ДиВэй»",
        contractor_type: "ul",
        contractor_inn: "7701647328",
        contractor_is_end: 1,
      },
      {
        id: 4,
        login: "river-golden",
        contractor_name: 'ООО "АЛТРЕЙД"',
        contractor_type: "ul",
        contractor_inn: "5001139967",
        contractor_is_end: 0,
      },
      {
        id: 5,
        login: "aromas-media",
        contractor_name: "ИП ПАНКОВ АНДРЕЙ АНДРЕЕВИЧ",
        contractor_type: "ip",
        contractor_inn: "7708757560",
        contractor_is_end: 1,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
th.th {
  font-size: 1rem;
  color: #001e3c;
}
</style>
