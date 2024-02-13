<template>
  <h1>Crime Events</h1>
  <dl v-if="events.data !== null">
    <template v-for="(elements, index) in types">
      {{ `| ${elements.type}: ${elements.number}` }}
    </template>
    <template v-for="(elements, index) in events.data">
      <section>
        <dt>
          {{ `${index}` }}
        </dt>
        <template v-for="(value, key) in elements">
          <template v-if="!isObject(value)">
            <dd>{{ `${key}: ${value}` }}</dd>
          </template>
          <template v-else>
            <dd>{{ `${key}: ${value.name}` }}</dd>
          </template>
        </template>
        <p></p>
      </section>
    </template>
  </dl>
  <p v-else>Loading...</p>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import axios from "axios";
const events = ref({ data: null });
const types = computed(() => {
  if (events.value.data === null) {
    return null;
  }
  const typesTemp = events.value.data.map((element) => element.type);
  const typeCount = {};
  typesTemp.forEach((type) => {
    typeCount[type] = (typeCount[type] || 0) + 1;
  });
  return Object.keys(typeCount).map((type) => {
    return { type: type, number: typeCount[type] };
  });
});
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
axios
  .get("https://polisen.se/api/events")
  .then((response) => response.data)
  .then((data) => {
    events.value.data = data.slice(0, 25);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
</script>
