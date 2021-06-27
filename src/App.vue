<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/register" label="Register" />
        <q-route-tab to="/error" label="Test" />
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/usersettings" label="Settings" />
        <q-route-tab to="/dashboard" label="Dashboard" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered>
    </q-drawer>

    <q-page-container>
      <br />
      <div class="fit row wrap justify-end items-start content-start">
        <q-fab
          v-model="fab2"
          label="Account"
          vertical-actions-align="left"
          color="indigo-4"
          icon="keyboard_arrow_down"
          direction="down"
        >
          <q-fab-action
            color="indigo-5"
            @click.prevent.stop="logout"
            icon="logout"
            label="logout"
          />
          <q-fab-action
            color="indigo-6"
            @click="onClick"
            icon="alarm"
            label="Alarm"
          />
          <q-fab-action
            color="indigo-7"
            @click="onClick"
            icon="airplay"
            label="Airplay"
          />
          <q-fab-action
            color="indigo-8"
            @click="onClick"
            icon="room"
            label="Map"
          />
        </q-fab>
      </div>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    const rightDrawerOpen = ref(false);
    const router = useRouter();

    function logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          router.replace("login");
        });
    }

    return {
      fab1: ref(true),
      fab2: ref(true),
      hideLabels: ref(false),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      logout,
      onClick() {
        // console.log('Clicked on a fab action')
      },
    };
  },
};
</script>