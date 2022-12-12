<template>
  <v-app-bar density="compact" tag="nav" color="app-bars">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        variant="text"
        :rounded="0"
        height="48"
        class="px-8"
        :to="link.path"
      >
        {{ link.name }}
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheMenu",
  data: () => ({
    links: [
      { name: "Клиенты", path: { name: "list" } },
      { name: "Генерация отчёта", path: { name: "report" } },
      { name: "Агентство", path: { name: "settings" } },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.v-btn:hover {
  background-color: rgb(var(--v-theme-success));
}
</style>
