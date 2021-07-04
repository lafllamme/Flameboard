<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="email"
        label="Your email *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type your email']"
      />

      <q-toggle
        @click="enable"
        v-model="accept"
        label="I accept the license and terms"
      />

      <div>
        <q-btn
          @click="forgetPassword"
          :disable="isDisabled"
          label="Reset"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import firebase from "firebase";
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
    const email = ref("");
    const accept = ref(false);
    let isDisabled = ref(true);

    return {
      email,
      accept,
      isDisabled,

      enable() {
        isDisabled.value= !isDisabled.value;
      },

      forgetPassword() {
        firebase
          .auth()
          .sendPasswordResetEmail(email.value)
          .then(() => {
            alert("Check your registered email to reset the password!");
            email.value = "";
          })
          .catch((error) => {
            alert(error);
          });
      },
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },
    };
  },
};
</script>