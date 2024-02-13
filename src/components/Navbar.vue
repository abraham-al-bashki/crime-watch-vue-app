<template :v-if="routes !== null">
  <nav>
    <ul>
      <template v-for="eachRoute in routes">
        <li :class="{ pressed: eachRoute.path === route.fullPath }">
          <router-link :to="{ name: eachRoute.name }">{{
            eachRoute.name
          }}</router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const routes = router.getRoutes().filter((route) => route.name !== "User");
console.log(route.fullPath);
</script>

<style>
.pressed {
  color: red;
  font-weight: bolder;
}
@media (450px <= width <= 800px) {
  body {
    font-size: large;
  }
}
@media (801px <= width <= 1199px) {
  body {
    font-size: larger;
  }
}
@media (1200px <= width) {
  body {
    font-size: x-large;
  }
}
</style>
<style scoped>
body header nav ul {
  padding-left: 0;
  display: flex;
  flex-direction: column;
}
body header nav ul li {
  display: inline;
  background: radial-gradient(
    ellipse closest-side,
    white 115%,
    rgb(92, 209, 238)
  );
  color: black;
  border-top: 10px solid red;
  border: 5px solid lightgrey;
  border-bottom-color: white;
  border-right-color: white;
}
@media (450px <= width <= 800px) {
  body header nav ul {
    flex-direction: row;
    gap: 20px;
    font-size: large;
  }
}
@media (801px <= width <= 1199px) {
  body header nav ul {
    flex-direction: row;
    gap: 50px;
    font-size: x-large;
  }
}
@media (1200px <= width) {
  body header nav ul {
    flex-direction: row;
    gap: 100px;
    font-size: xx-large;
  }
}
</style>
