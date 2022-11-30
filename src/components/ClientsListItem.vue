<template>
  <tr>
    <td>{{ client.login }}</td>
    <td>{{ client.contractor_name }}</td>
    <td>{{ translate_type }}</td>
    <td>{{ client.contractor_inn }}</td>
    <td>{{ translate_is_end }}</td>
  </tr>
</template>

<script>
export default {
  name: "ClientsListItem",
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
    background-color: #f3f9ff;
  }
  &:hover {
    background-color: #f57c0059;
  }
}
td:first-child {
  font-weight: bold;
}
</style>
