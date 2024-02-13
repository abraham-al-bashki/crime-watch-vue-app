<template>
  <h1>Users List page</h1>
  <template v-if="users !== undefined">
    <p v-for="user in users" :key="user.id">
      <router-link
        :to="{
          name: 'User',
          params: {
            id: user.id,
          },
        }"
      >
        ({{ user.id }}) {{ user.name }}
      </router-link>
    </p>
  </template>
</template>

<script setup>
import { ref } from "vue";
const users = ref([
  { id: "guest", name: "" },
  { id: 2, name: "Kalle" },
  { id: 3, name: "Anki" },
  { id: 4, name: "Rik" },
  { id: 5, name: "Ardo" },
]);
</script>
