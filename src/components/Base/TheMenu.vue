<template>
  <v-app-bar density="compact" tag="nav" color="app-bars">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        :rounded="0"
        height="48"
        class="px-8"
      >
        {{ link }}
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheMenu",
  data: () => ({
    links: ["Клиенты", "Генерация отчёта", "Агентство"],
  }),
};
</script>

<style scoped>
.v-btn:hover {
  background-color: rgb(var(--v-theme-success));
}
</style>
