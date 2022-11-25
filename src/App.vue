<template>
  <v-app>
    <the-header />
    <the-menu />
    <v-main>
      <v-container>
        <v-card title="Настройки агентства" color="surface-secondary">
          <agency-settings />
        </v-card>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import AgencySettings from "./components/AgencySettings.vue";
import TheFooter from "./components/Base/TheFooter.vue";
import TheHeader from "./components/Base/TheHeader.vue";
import TheMenu from "./components/Base/TheMenu.vue";

export default {
  name: "App",
  components: {
    TheFooter,
    TheMenu,
    TheHeader,
    AgencySettings,
  },
};
</script>

<style>
@media (min-width: 1920px) {
  .v-main > .v-container {
    max-width: 1200px;
  }
}
</style>
