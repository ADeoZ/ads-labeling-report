<template>
  <v-app-bar density="compact" tag="nav">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-3"
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
    links: ["Первый", "Второй", "Третий"],
  }),
};
</script>
