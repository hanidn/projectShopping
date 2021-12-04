<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <br /><br /><br />
  </div>
</template>

<script>
import AppHeader from "./assets/pages/shared/Header";
import AppFooter from "./assets/pages/shared/Footer";
export default {
  components: {
    AppHeader: AppHeader,
    AppFooter: AppFooter
  }
};
</script>
