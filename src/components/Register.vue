<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="Your username *"
        hint="A-Z, 0-9"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="email"
        v-model="email"
        label="Your email *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type an email',
        ]"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
        hint="at least 8 signs"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type a password',
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn
          @click="registerUser"
          label="Submit"
          type="submit"
          color="primary"
        />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import firebase from "firebase";
import db from "/src/firestore";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();

    const username = ref(null)
    const email = ref(null)
    const password = ref(null)

    const accept = ref(false);
    const successMessage = ref(null)
    const errorMessage = ref(null)

    function registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          firebase
            .auth()
            .currentUser.updateProfile({
              displayName: username.value,
            })
            .then(() => {
              db.collection("users")
                .add({
                  username: username.value,
                  email: email.value,
                })
                .then(() => {
                  router.replace("home");
                })
                .catch((err) => {
                  errorMessage.value = err.message;
                });
            })
            .catch((err) => {
              errorMessage.value = err.message;
            });
        })
        .catch((err) => {
          errorMessage.value = err.message;
        });
    }

    return {
      username,
      email,
      password,
      accept,
      successMessage,
      errorMessage,
      registerUser,

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
      onReset() {
        username.value = null;
        email.value = null;
        password.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
