<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab == 'register'"
      v-model="formData.name"
      class="q-mb-md"
      outlined
      label="Name"
    />
    <q-input v-model="formData.email" class="q-mb-md" outlined type="email" label="Địa chỉ email" />
    <q-input v-model="formData.password" class="q-mb-md" outlined type="password" label="Mật khẩu" />
    <div class="row">
      <q-space />
      <q-btn color="primary" type="submit" :label="btnTitle" />
    </div>
  </q-form>
</template>

<script>
export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm() {
      if (this.tab == "login") {
        console.log("login the user");
      } else {
        console.log("register the user");
      }
    }
  },
  computed: {
    btnTitle() {
      if (this.tab == "login") return "Đăng nhập";
      else if (this.tab == "register") return "Đăng ký";
    }
  }
};
</script>