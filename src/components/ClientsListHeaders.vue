<template>
  <th class="px-0">
    <v-btn
      variant="text"
      :block="true"
      :disabled="!sortable"
      :append-icon="selectIcon"
      @click="emitEvent"
      min-width="125"
      class="px-4 justify-start text-subtitle-1"
    >
      {{ label }}
    </v-btn>
  </th>
</template>

<script>
export default {
  name: "ClientsListHeaders",
  props: {
    label: {
      type: String,
      required: true,
    },
    sortable: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: Number,
      required: false,
    },
  },
  methods: {
    emitEvent() {
      this.$emit("clickHeader");
    },
  },
  computed: {
    selectIcon() {
      if (this.icon) {
        return this.icon === 1 ? "mdi-chevron-down" : "mdi-chevron-up";
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  text-indent: 0;
}
.v-btn--disabled {
  opacity: 1;
}
</style>
