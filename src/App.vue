<template>
  <v-app>
    <the-header />
    <the-menu />
    <v-main>
      <v-container>
        <v-card class="rounded-0 mt-8" elevation="7">
          <router-view />
        </v-card>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from "@/components/Base/TheFooter.vue";
import TheHeader from "@/components/Base/TheHeader.vue";
import TheMenu from "@/components/Base/TheMenu.vue";

export default {
  name: "App",
  components: {
    TheFooter,
    TheMenu,
    TheHeader,
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
