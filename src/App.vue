<template>
  <v-app>
    <the-header />
    <the-menu />
    <v-main>
      <v-container>
        <v-card class="rounded-0" elevation="7">
          <agency-settings />
          <create-report />
          <clients-list />
        </v-card>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import AgencySettings from "@/components/AgencySettings.vue";
import TheFooter from "@/components/Base/TheFooter.vue";
import TheHeader from "@/components/Base/TheHeader.vue";
import TheMenu from "@/components/Base/TheMenu.vue";
import ClientsList from "@/components/ClientsList.vue";
import CreateReport from "@/components/CreateReport.vue";

export default {
  name: "App",
  components: {
    TheFooter,
    TheMenu,
    TheHeader,
    AgencySettings,
    CreateReport,
    ClientsList,
  },
};
</script>

<style>
@media (min-width: 1920px) {
  .v-main > .v-container {
    max-width: 1200px;
  }
}
.v-theme--mainTheme.v-card {
  border-color: #f57c00;
}
</style>
