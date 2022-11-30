<template>
  <v-footer app class="pa-0" color="app-bars" height="20">
    <div class="w-100 px-4 py-2 text-right text-subtitle-2">
      {{ new Date().getFullYear() }} — <strong>Aleksey Denisov</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
.v-footer {
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }
}
</style>
