<template>
  <Header />
  <main>
    <p>
      <button @click="navigateBack()">Navigate Back</button>
      <button @click="navigateForward()">Navigate Forward</button>

      <button @click="guestUser()">Redirect to "/user/guest"</button>
    </p>
    <router-view></router-view>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
  </main>
  <Footer />
</template>

<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRouter } from "vue-router";
const router = useRouter();
function navigateBack() {
  router.go(-1);
}
function navigateForward() {
  router.go(1);
}
function guestUser() {
  router.push("/user/guest");
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
