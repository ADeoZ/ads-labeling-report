<template>
  <v-card variant="outlined" max-width="500" class="mx-auto my-16">
    <v-card-title>Авторизация</v-card-title>
    <v-card-text class="my-8">
      <v-form ref="auth" v-model="valid" @submit.prevent="submit">
        <v-text-field
          v-model="auth.login"
          :rules="rules.authLogin"
          label="Логин"
          variant="outlined"
          required
          class="mb-2"
        />
        <v-text-field
          v-model="auth.password"
          :rules="rules.authPassword"
          label="Пароль"
          :type="showPassword ? 'text' : 'password'"
          variant="outlined"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
          required
          class="mb-2"
        />
        <div class="w-100 d-flex justify-end">
          <v-btn type="submit" color="success" class="mr-4">Войти</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>

  <error-snackbar :message="error" />
</template>

<script>
import ErrorSnackbar from "@/components/base/ErrorSnackbar.vue";
import { rules } from "@/utils/rules";

export default {
  components: { ErrorSnackbar },

  name: "TheLogin",

  data: () => ({
    auth: {
      login: "",
      password: "",
    },
    showPassword: false,
    rules,
    valid: true,
  }),

  computed: {
    error() {
      return this.$store.state.auth.error;
    },
  },

  methods: {
    async submit() {
      const { valid } = await this.$refs.auth.validate();
      if (valid) {
        await this.$store.dispatch("auth/login", this.auth);
        if (this.$store.state.auth.loggedStatus) {
          this.$router.push("/");
        }
      }
    },
  },
};
</script>

<style></style>
