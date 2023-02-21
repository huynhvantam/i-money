<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <i class="t2ico t2ico-wallet"></i>
  </nav> -->
  <component :is="layout"></component>
  <router-view />
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "./constants/index";
export default {
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>
